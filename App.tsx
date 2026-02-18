import React, { useState, useMemo } from 'react';
import { courses, reviews } from './data';
import CourseCard from './components/CourseCard';
import { Search, Filter, CalendarDays, GraduationCap, Mail } from 'lucide-react';
import { DayFilter } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dayFilter, setDayFilter] = useState<DayFilter>('All');
  const [instructorFilter, setInstructorFilter] = useState('All');

  // Derive unique instructors for filter
  const instructors = useMemo(() => {
    const list = Array.from(new Set(courses.map(c => c.instructor)));
    return ['All', ...list.sort()];
  }, []);

  // Filter Logic
  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.sln.includes(searchQuery);

    const matchesDay = 
      dayFilter === 'All' ? true :
      dayFilter === 'Evening' ? (parseInt(course.time.split('-')[0].split(':')[0]) >= 5 || course.time.includes('6:00')) : // Rough heuristic for evening
      course.days.includes(dayFilter.split('/')[0]); // "Mon" matches "Mon/Wed"

    const matchesInstructor = 
      instructorFilter === 'All' ? true : course.instructor === instructorFilter;

    return matchesSearch && matchesDay && matchesInstructor;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-900 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-purple-900/20 shadow-lg">
                F
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 leading-none">Spring 2026 Electives</h1>
                <span className="text-xs text-purple-700 font-medium">Foster School of Business</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <a 
                 href="mailto:mbaregis@uw.edu" 
                 className="hidden md:flex text-sm text-gray-500 hover:text-purple-700 font-medium items-center gap-2 transition-colors"
               >
                 <Mail className="w-4 h-4" />
                 mbaregis@uw.edu
               </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Course Dashboard</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Explore available electives for the upcoming quarter. View schedules, syllabus details, and read peer reviews to make informed decisions.
          </p>
        </div>

        {/* Controls Section */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 sticky top-20 z-40">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            
            {/* Search */}
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by course code, title, or SLN..."
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="relative group min-w-[140px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarDays className="h-4 w-4 text-gray-500" />
                </div>
                <select
                  value={dayFilter}
                  onChange={(e) => setDayFilter(e.target.value as DayFilter)}
                  className="block w-full pl-9 pr-8 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer hover:bg-gray-50"
                >
                  <option value="All">All Days</option>
                  <option value="Mon/Wed">Mon/Wed</option>
                  <option value="Tue/Thu">Tue/Thu</option>
                  <option value="Evening">Evening (5pm+)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <Filter className="h-3 w-3 text-gray-400" />
                </div>
              </div>

              <div className="relative group min-w-[160px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GraduationCap className="h-4 w-4 text-gray-500" />
                </div>
                <select
                  value={instructorFilter}
                  onChange={(e) => setInstructorFilter(e.target.value)}
                  className="block w-full pl-9 pr-8 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer hover:bg-gray-50"
                >
                  <option value="All">All Instructors</option>
                  {instructors.filter(i => i !== 'All').map(instructor => (
                    <option key={instructor} value={instructor}>{instructor}</option>
                  ))}
                </select>
                 <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <Filter className="h-3 w-3 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-4 px-1">
          <span className="text-sm font-medium text-gray-500">
            Showing {filteredCourses.length} courses
          </span>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard 
                key={`${course.code}-${course.sln}`} 
                course={course} 
                reviews={reviews} 
              />
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
              <div className="mx-auto h-12 w-12 text-gray-300">
                <Search className="h-full w-full" />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No courses found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
              <button 
                onClick={() => {setSearchQuery(''); setDayFilter('All'); setInstructorFilter('All');}}
                className="mt-6 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Foster School of Business - MBA Elective Dashboard. Data updated 2/3/2026.
            </p>
         </div>
      </footer>
    </div>
  );
}

export default App;