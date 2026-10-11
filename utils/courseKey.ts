import { Course } from '../types';

const CATALOG_PREFIX = 'cat-';

// Stable identity for a course inside the plan. Scheduled sections have a unique SLN, but
// catalog-only rows all carry sln "N/A", so keying on sln alone made saving one catalog
// course mark all of them saved. For those rows we derive a slug from code + title (the pair
// is unique in the catalog, and title is required because special-topics codes like ACCTG 579
// cover several unrelated courses). Derived, not stored, so plans already in localStorage
// and old share links keep resolving without a migration.
export function courseKey(course: Pick<Course, 'sln' | 'code' | 'title'>): string {
  const sln = course.sln?.trim();
  if (sln && sln !== 'N/A') return sln;
  const slug = `${course.code} ${course.title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return CATALOG_PREFIX + slug;
}

export function sameCourse(a: Course, b: Course): boolean {
  return courseKey(a) === courseKey(b);
}
