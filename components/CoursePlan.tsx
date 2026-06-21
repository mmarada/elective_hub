
import React from 'react';
import { Course } from '../types';
import { X, Calendar, Download, BookmarkX, Clock, MapPin, AlertTriangle } from 'lucide-react';

interface CoursePlanProps {
  savedCourses: Course[];
  onRemove: (sln: string) => void;
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

const CoursePlan: React.FC<CoursePlanProps> = ({ savedCourses, onRemove, onClose }) => {
  const conflicts = detectConflicts(savedCourses);
  const conflictingSlns = new Set(conflicts.flatMap(c => [c.a.sln, c.b.sln]));

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

        {/* Course List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {savedCourses.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-200" />
              <p className="font-semibold text-gray-500">No courses saved yet</p>
              <p className="text-sm mt-1">Click "Save to Plan" on any course card to add it here.</p>
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
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-500 mb-3">
              Exports recurring weekly events for Spring 2026 (Mar 30 – Jun 5) in iCal format. Compatible with Google Calendar, Apple Calendar, and Outlook.
            </p>
            <button
              onClick={() => downloadIcal(savedCourses)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-800 to-indigo-900 hover:from-purple-700 hover:to-indigo-800 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Export to Calendar (.ics)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePlan;
