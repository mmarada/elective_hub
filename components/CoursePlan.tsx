
import React, { useState } from 'react';
import { Course } from '../types';
import { X, Calendar, Download, BookmarkX, Clock, MapPin, AlertTriangle, Link, Check, List, LayoutGrid, Plus, Search } from 'lucide-react';

interface CoursePlanProps {
  savedCourses: Course[];
  allCourses: Course[];
  onRemove: (sln: string) => void;
  onAdd: (course: Course) => void;
  onClose: () => void;
}

// Map day strings to iCal BYDAY values and the first occurrence date in Spring 2026
// UW Spring 2026: March 30 (Mon) – June 5 (Fri)
const DAY_TO_ICAL: Record<string, string> = {
  Mon: 'MO',
  Tue: 'TU',
  Wed: 'WE',
  Thu: 'TH',
  Fri: 'FR',
};

const FIRST_OCCURRENCE: Record<string, string> = {
  Mon:     '20260330',
  Tue:     '20260331',
  Wed:     '20260401',
  Thu:     '20260402',
  Fri:     '20260403',
  'Mon/Wed': '20260330',
  'Tue/Thu': '20260331',
  'Wed/Fri': '20260401',
};

const UNTIL = '20260606T235959Z';

function parseDays(days: string): { icalDays: string; firstDate: string } {
  const parts = days.split('/');
  const icalDays = parts.map(d => DAY_TO_ICAL[d] ?? d).join(',');
  const firstDate = FIRST_OCCURRENCE[days] ?? FIRST_OCCURRENCE[parts[0]] ?? '20260330';
  return { icalDays, firstDate };
}

function parseTime(time: string): { start: string; end: string } {
  // e.g. "10:30-12:20" or "3:30-5:20" or "6:00-9:30"
  const [rawStart, rawEnd] = time.split('-');
  const toHHMM = (t: string) => {
    const [h, m] = t.split(':').map(Number);
    return `${String(h).padStart(2, '0')}${String(m ?? 0).padStart(2, '0')}`;
  };
  return { start: toHHMM(rawStart.trim()), end: toHHMM(rawEnd.trim()) };
}

function uid(course: Course): string {
  return `${course.sln}-${course.code.replace(/\s/g, '')}-elective-hub@uw.edu`;
}

// --- Conflict Detection ---

function parseDaysArray(days: string): string[] {
  return days.split('/').map(d => d.trim()).filter(Boolean);
}

function parseTimeToMinutes(time: string): { start: number; end: number } | null {
  const parts = time.split('-');
  if (parts.length !== 2) return null;
  const toMins = (t: string) => {
    const [h, m] = t.trim().split(':').map(Number);
    return h * 60 + (m || 0);
  };
  return { start: toMins(parts[0]), end: toMins(parts[1]) };
}

interface Conflict {
  a: Course;
  b: Course;
  sharedDays: string[];
}

function detectConflicts(courses: Course[]): Conflict[] {
  const conflicts: Conflict[] = [];
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const a = courses[i];
      const b = courses[j];
      const daysA = parseDaysArray(a.days);
      const daysB = parseDaysArray(b.days);
      const sharedDays = daysA.filter(d => daysB.includes(d));
      if (sharedDays.length === 0) continue;
      const timeA = parseTimeToMinutes(a.time);
      const timeB = parseTimeToMinutes(b.time);
      if (!timeA || !timeB) continue;
      // Overlap: not (A ends before B starts or B ends before A starts)
      const overlaps = timeA.start < timeB.end && timeB.start < timeA.end;
      if (overlaps) conflicts.push({ a, b, sharedDays });
    }
  }
  return conflicts;
}

// --- Weekly Schedule Grid ---

const GRID_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const GRID_START_HOUR = 8; // 8am
const GRID_END_HOUR = 22; // 10pm
const HOUR_HEIGHT = 48;

interface GridItem {
  course: Course;
  start: number;
  end: number;
  hasConflict: boolean;
  col: number;
  cols: number;
}

// Assigns non-overlapping column slots to same-day events (first-fit, clustered by overlap)
function layoutColumns(items: Omit<GridItem, 'col' | 'cols'>[]): GridItem[] {
  const sorted = [...items].sort((a, b) => a.start - b.start);
  const result: GridItem[] = [];
  let cluster: GridItem[] = [];
  let clusterEnd = -Infinity;

  const flushCluster = () => {
    if (cluster.length === 0) return;
    const colEnds: number[] = [];
    for (const item of cluster) {
      let col = colEnds.findIndex(end => end <= item.start);
      if (col === -1) {
        col = colEnds.length;
        colEnds.push(item.end);
      } else {
        colEnds[col] = item.end;
      }
      item.col = col;
    }
    const cols = colEnds.length;
    for (const item of cluster) item.cols = cols;
    result.push(...cluster);
    cluster = [];
  };

  for (const item of sorted) {
    if (cluster.length > 0 && item.start >= clusterEnd) {
      flushCluster();
      clusterEnd = -Infinity;
    }
    cluster.push({ ...item, col: 0, cols: 1 });
    clusterEnd = Math.max(clusterEnd, item.end);
  }
  flushCluster();
  return result;
}

const ScheduleGrid: React.FC<{ courses: Course[]; conflictingSlns: Set<string>; onRemove: (sln: string) => void }> = ({ courses, conflictingSlns, onRemove }) => {
  const dayItems: Record<string, Omit<GridItem, 'col' | 'cols'>[]> = { Mon: [], Tue: [], Wed: [], Thu: [], Fri: [] };
  const unscheduled: Course[] = [];

  for (const c of courses) {
    const time = parseTimeToMinutes(c.time);
    const days = parseDaysArray(c.days).filter(d => GRID_DAYS.includes(d));
    if (!time || days.length === 0) {
      unscheduled.push(c);
      continue;
    }
    for (const d of days) {
      dayItems[d].push({ course: c, start: time.start, end: time.end, hasConflict: conflictingSlns.has(c.sln) });
    }
  }

  const gridHeight = (GRID_END_HOUR - GRID_START_HOUR) * HOUR_HEIGHT;
  const hours = Array.from({ length: GRID_END_HOUR - GRID_START_HOUR + 1 }, (_, i) => GRID_START_HOUR + i);
  const formatHour = (h: number) => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;

  return (
    <div>
      <div className="flex text-xs">
        <div className="w-9 flex-shrink-0" />
        {GRID_DAYS.map(d => (
          <div key={d} className="flex-1 text-center font-bold text-gray-600 pb-1">{d}</div>
        ))}
      </div>
      <div className="flex border-t border-gray-200" style={{ height: gridHeight }}>
        <div className="w-9 flex-shrink-0 relative">
          {hours.map(h => (
            <div
              key={h}
              className="absolute right-1 text-[9px] text-gray-400 -translate-y-1/2"
              style={{ top: (h - GRID_START_HOUR) * HOUR_HEIGHT }}
            >
              {formatHour(h)}
            </div>
          ))}
        </div>
        {GRID_DAYS.map(day => {
          const items = layoutColumns(dayItems[day]);
          return (
            <div key={day} className="flex-1 relative border-l border-gray-100">
              {hours.map(h => (
                <div
                  key={h}
                  className="absolute left-0 right-0 border-t border-gray-100"
                  style={{ top: (h - GRID_START_HOUR) * HOUR_HEIGHT }}
                />
              ))}
              {items.map((item, idx) => {
                const top = Math.max(0, ((item.start - GRID_START_HOUR * 60) / 60) * HOUR_HEIGHT);
                const height = Math.max(20, ((item.end - item.start) / 60) * HOUR_HEIGHT - 2);
                const widthPct = 100 / item.cols;
                const leftPct = item.col * widthPct;
                return (
                  <div
                    key={`${item.course.sln}-${idx}`}
                    className={`absolute rounded-md border px-1.5 py-1 overflow-hidden text-[10px] leading-tight group/block ${
                      item.hasConflict
                        ? 'bg-red-100 border-red-400 text-red-800'
                        : 'bg-purple-100 border-purple-300 text-purple-800'
                    }`}
                    style={{ top, height, left: `${leftPct}%`, width: `calc(${widthPct}% - 3px)` }}
                    title={`${item.course.code} · ${item.course.time} · click × to remove`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(item.course.sln);
                      }}
                      className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center opacity-0 group-hover/block:opacity-100 transition-opacity bg-black/10 hover:bg-black/25"
                      title={`Remove ${item.course.code} from plan`}
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                    <p className="font-bold truncate pr-3">{item.course.code}</p>
                    <p className="truncate">{item.course.time}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {unscheduled.length > 0 && (
        <p className="mt-3 text-[11px] text-gray-400">
          {unscheduled.length} course{unscheduled.length > 1 ? 's' : ''} without a fixed time ({unscheduled.map(c => c.code).join(', ')}) not shown on the grid.
        </p>
      )}
    </div>
  );
};

function buildIcal(courses: Course[]): string {
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MBA Electives Hub//ElectiveHub//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:UW MBA Elective Plan',
    'X-WR-TIMEZONE:America/Los_Angeles',
  ];

  for (const c of courses) {
    const { icalDays, firstDate } = parseDays(c.days);
    const { start, end } = parseTime(c.time);
    const dtStart = `${firstDate}T${start}00`;
    const dtEnd   = `${firstDate}T${end}00`;
    const now = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15) + 'Z';

    lines.push(
      'BEGIN:VEVENT',
      `UID:${uid(c)}`,
      `DTSTAMP:${now}`,
      `DTSTART;TZID=America/Los_Angeles:${dtStart}`,
      `DTEND;TZID=America/Los_Angeles:${dtEnd}`,
      `RRULE:FREQ=WEEKLY;BYDAY=${icalDays};UNTIL=${UNTIL}`,
      `SUMMARY:${c.code} – ${c.title}`,
      `DESCRIPTION:Instructor: ${c.instructor}\\nCredits: ${c.credits}\\nSLN: ${c.sln}\\nQuarter: ${c.quarter}`,
      `LOCATION:${c.room}`,
      'END:VEVENT',
    );
  }

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

function downloadIcal(courses: Course[]) {
  const content = buildIcal(courses);
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'uw-mba-elective-plan.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const CoursePlan: React.FC<CoursePlanProps> = ({ savedCourses, allCourses, onRemove, onAdd, onClose }) => {
  const conflicts = detectConflicts(savedCourses);
  const conflictingSlns = new Set(conflicts.flatMap(c => [c.a.sln, c.b.sln]));
  const [copied, setCopied] = useState(false);
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [addQuery, setAddQuery] = useState('');

  const handleCopyLink = () => {
    const slns = savedCourses.map(c => c.sln).join(',');
    const url = `${window.location.origin}${window.location.pathname}?plan=${encodeURIComponent(slns)}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const savedSlns = new Set(savedCourses.map(c => c.sln));
  const addQueryTrimmed = addQuery.trim().toLowerCase();
  const addResults = addQueryTrimmed.length === 0 ? [] : allCourses
    .filter(c => !savedSlns.has(c.sln))
    .filter(c =>
      c.code.toLowerCase().includes(addQueryTrimmed) ||
      c.title.toLowerCase().includes(addQueryTrimmed) ||
      c.instructor.toLowerCase().includes(addQueryTrimmed)
    )
    .slice(0, 6);

  const handleAdd = (course: Course) => {
    onAdd(course);
    setAddQuery('');
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-900 to-indigo-800">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-200" />
            <h2 className="text-lg font-bold text-white">My Course Plan</h2>
            {savedCourses.length > 0 && (
              <span className="ml-1 text-xs font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                {savedCourses.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-purple-200 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Toggle */}
        {savedCourses.length > 0 && (
          <div className="flex gap-1 mx-6 mt-4 p-1 bg-gray-100 rounded-lg w-fit">
            <button
              onClick={() => setView('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                view === 'list' ? 'bg-white text-purple-800 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <List className="w-3.5 h-3.5" /> List
            </button>
            <button
              onClick={() => setView('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                view === 'grid' ? 'bg-white text-purple-800 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Grid
            </button>
          </div>
        )}

        {/* Conflict Warning Banner */}
        {conflicts.length > 0 && (
          <div className="mx-6 mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-amber-800">
                  {conflicts.length} schedule conflict{conflicts.length > 1 ? 's' : ''} detected
                </p>
                <ul className="mt-1 space-y-0.5">
                  {conflicts.map((c, i) => (
                    <li key={i} className="text-xs text-amber-700">
                      <span className="font-semibold">{c.a.code}</span> &amp; <span className="font-semibold">{c.b.code}</span>
                      {' '}overlap on <span className="font-semibold">{c.sharedDays.join(', ')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Course List / Grid */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {savedCourses.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-200" />
              <p className="font-semibold text-gray-500">No courses saved yet</p>
              <p className="text-sm mt-1">Click "Save to Plan" on any course card to add it here.</p>
            </div>
          ) : view === 'grid' ? (
            <div>
              <div className="relative mb-3">
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <Search className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={addQuery}
                  onChange={(e) => setAddQuery(e.target.value)}
                  placeholder="Add a course to the grid…"
                  className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
                />
                {addQueryTrimmed.length > 0 && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    {addResults.length === 0 ? (
                      <p className="px-3 py-2 text-xs text-gray-400">No matching courses to add.</p>
                    ) : (
                      addResults.map(c => (
                        <button
                          key={c.sln}
                          onClick={() => handleAdd(c)}
                          className="w-full flex items-center justify-between gap-2 px-3 py-2 text-left hover:bg-purple-50 transition-colors border-b border-gray-50 last:border-b-0"
                        >
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-purple-800">{c.code} <span className="font-normal text-gray-600">· {c.title}</span></p>
                            <p className="text-[10px] text-gray-400">{c.days} {c.time}</p>
                          </div>
                          <Plus className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
              <ScheduleGrid courses={savedCourses} conflictingSlns={conflictingSlns} onRemove={onRemove} />
            </div>
          ) : (
            savedCourses.map(c => {
              const hasConflict = conflictingSlns.has(c.sln);
              return (
                <div
                  key={c.sln}
                  className={`rounded-xl border p-4 transition-all group ${
                    hasConflict
                      ? 'bg-amber-50/60 border-amber-300 hover:border-amber-400'
                      : 'bg-gray-50 border-gray-200 hover:border-purple-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-md ${
                          hasConflict ? 'text-amber-800 bg-amber-100' : 'text-purple-700 bg-purple-100'
                        }`}>
                          {c.code}
                        </span>
                        {hasConflict && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-full">
                            <AlertTriangle className="w-2.5 h-2.5" /> Conflict
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-gray-900 leading-snug">{c.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{c.instructor} · {c.credits} cr</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />{c.days} {c.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />{c.room}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(c.sln)}
                      className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0 p-1 rounded-lg hover:bg-red-50"
                      title="Remove from plan"
                    >
                      <BookmarkX className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Export Footer */}
        {savedCourses.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 space-y-3">
            <p className="text-xs text-gray-500">
              Exports recurring weekly events for Spring 2026 (Mar 30 – Jun 5) in iCal format. Compatible with Google Calendar, Apple Calendar, and Outlook.
            </p>
            <button
              onClick={() => downloadIcal(savedCourses)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-800 to-indigo-900 hover:from-purple-700 hover:to-indigo-800 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Export to Calendar (.ics)
            </button>
            <button
              onClick={handleCopyLink}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl border transition-all ${
                copied
                  ? 'bg-green-50 border-green-300 text-green-700'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Link className="w-4 h-4" />}
              {copied ? 'Link copied!' : 'Copy Share Link'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePlan;
