
import React from 'react';
import { Course } from '../types';
import { X, Calendar, Download, BookmarkX, Clock, MapPin } from 'lucide-react';

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

        {/* Course List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {savedCourses.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-200" />
              <p className="font-semibold text-gray-500">No courses saved yet</p>
              <p className="text-sm mt-1">Click "Save to Plan" on any course card to add it here.</p>
            </div>
          ) : (
            savedCourses.map(c => (
              <div
                key={c.sln}
                className="bg-gray-50 rounded-xl border border-gray-200 p-4 hover:border-purple-200 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className="inline-block text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md mb-1">
                      {c.code}
                    </span>
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
            ))
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
