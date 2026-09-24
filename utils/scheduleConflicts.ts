import { Course } from '../types';

export function parseDaysArray(days: string): string[] {
  return days.split('/').map(d => d.trim()).filter(Boolean);
}

export function parseTimeToMinutes(time: string): { start: number; end: number } | null {
  const parts = time.split('-');
  if (parts.length !== 2) return null;
  const toMins = (t: string) => {
    const [h, m] = t.trim().split(':').map(Number);
    return h * 60 + (m || 0);
  };
  return { start: toMins(parts[0]), end: toMins(parts[1]) };
}

export function findConflictingCourses(candidate: Course, existing: Course[]): Course[] {
  const candidateDays = parseDaysArray(candidate.days);
  const candidateTime = parseTimeToMinutes(candidate.time);
  if (candidateDays.length === 0 || !candidateTime) return [];
  return existing.filter(c => {
    const sharedDays = parseDaysArray(c.days).filter(d => candidateDays.includes(d));
    if (sharedDays.length === 0) return false;
    const time = parseTimeToMinutes(c.time);
    if (!time) return false;
    return candidateTime.start < time.end && time.start < candidateTime.end;
  });
}

// Other scheduled sections of the same course (same code AND title, since special-topics
// codes like FIN 579 reuse one code across unrelated courses) that would not conflict with
// the rest of the plan once `course` is swapped out.
export function findAlternateSections(course: Course, allCourses: Course[], plan: Course[]): Course[] {
  const rest = plan.filter(c => c.sln !== course.sln);
  const planSlns = new Set(plan.map(c => c.sln));
  return allCourses.filter(c =>
    c.sln !== course.sln &&
    !planSlns.has(c.sln) &&
    c.code === course.code &&
    c.title === course.title &&
    c.quarter === course.quarter &&
    parseDaysArray(c.days).length > 0 &&
    parseTimeToMinutes(c.time) !== null &&
    findConflictingCourses(c, rest).length === 0
  );
}
