
import React, { useState, useEffect } from 'react';
import { Course, Review } from '../types';
import { ChevronDown, ChevronUp, Clock, MapPin, Calendar, BookOpen, GraduationCap, Mail, Info, FileText, CheckCircle, Book, Star, Layers, FileImage, FileInput, ExternalLink } from 'lucide-react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { courseDetails } from '../data';
import { supabase } from '../supabaseClient';

interface CourseCardProps {
  course: Course;
  reviews: Review[];
  onReviewSubmitted?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, reviews, onReviewSubmitted }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'reviews'>('overview');

  // Filter reviews to match this specific course context better if it's a generic ID
  // For special topics (like ENTRE 579), we try to match the title or instructor if possible
  const filteredReviews = reviews.filter(r => {
    // Exact code match required
    if (r.courseId !== course.code && r.courseId !== course.code.split('/')[0]) return false;
    
    // If it's a generic code like 579, try to match context or professor
    const isSpecialTopic = course.code.includes('579') || course.code.includes('557');
    if (isSpecialTopic) {
        // If the review has a context title, it must match the course title (fuzzy)
        if (r.courseTitleContext) {
            return course.title.toLowerCase().includes(r.courseTitleContext.toLowerCase()) || 
                   r.courseTitleContext.toLowerCase().includes(course.title.toLowerCase());
        }
        // Fallback: match professor last name
        const instructorLastName = course.instructor.split(' ').pop() || "";
        return r.professor.includes(instructorLastName);
    }
    return true;
  });

  const hasReviews = filteredReviews.length > 0;
  const description = course.syllabus?.description || courseDetails[course.code] || "No detailed description available. Please contact the instructor for the latest syllabus.";

  // Prepare email content
  const emailSubject = `Registration Inquiry: ${course.code} - ${course.title} (SLN ${course.sln})`;
  const emailBody = `Hi,\n\nI am interested in registering for the following course:\n\nCourse: ${course.code} - ${course.title}\nSLN: ${course.sln}\nQuarter: ${course.quarter}\n\nCould you please provide the registration code required to sign up for this course?\n\nThanks,\n[Your Name]`;
  const mailtoLink = `mailto:mbaregis@uw.edu?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Determine link type and icon
  const getLinkInfo = (link?: string) => {
    if (!link) return { text: "Syllabus N/A", icon: FileText };
    const lowerLink = link.toLowerCase();
    if (lowerLink.includes('flyer')) return { text: "View Flyer", icon: FileImage };
    if (lowerLink.includes('application')) return { text: "View Application", icon: FileInput };
    return { text: "View Syllabus PDF", icon: FileText };
  };

  const linkInfo = getLinkInfo(course.syllabusLink);
  const LinkIcon = linkInfo.icon;

  return (
    <div className={`group bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${isExpanded ? 'border-purple-300 shadow-xl ring-1 ring-purple-100 scale-[1.01]' : hasReviews ? 'border-amber-200 hover:border-purple-300 hover:shadow-lg hover:-translate-y-0.5' : 'border-gray-200 hover:border-purple-300 hover:shadow-lg hover:-translate-y-0.5'}`}>
      {/* Card Header / Summary */}
      <div 
        className="p-5 sm:p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex-1 min-w-0 w-full">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200 shadow-sm">
                {course.code}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 shadow-sm">
                <Layers className="w-3 h-3 mr-1.5" />
                {course.quarter}
              </span>
              {course.sln !== "N/A" && (
                <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded-md border border-gray-200">
                    SLN: {course.sln}
                </span>
              )}
              {course.info && (
                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100">
                  {course.info}
                </span>
              )}
              {hasReviews && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 animate-in fade-in duration-500 shadow-sm">
                  <Star className="w-3 h-3 mr-1.5 fill-amber-400 text-amber-400" />
                  {filteredReviews.length} Review{filteredReviews.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight pr-4 break-words group-hover:text-purple-900 transition-colors">
              {course.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                <GraduationCap className="w-4 h-4 text-purple-500" />
                <span className="font-semibold text-gray-800">{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <span className="font-medium">{course.credits} Credits</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col flex-wrap gap-2 sm:gap-1.5 mt-2 sm:mt-0 w-full sm:w-auto items-center sm:items-end justify-start sm:justify-end text-left sm:text-right">
             <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 whitespace-nowrap shadow-sm">
                <Calendar className="w-4 h-4 text-purple-600" />
                {course.days}
             </div>
             <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <Clock className="w-3 h-3" />
                {course.time}
             </div>
             <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <MapPin className="w-3 h-3" />
                {course.room}
             </div>
          </div>
        </div>
        
        <div className="mt-5 flex justify-center">
            <div className={`p-1 rounded-full transition-colors duration-300 ${isExpanded ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-400'}`}>
                {isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                ) : (
                    <ChevronDown className="w-5 h-5" />
                )}
            </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-gray-100 bg-gray-50/80 rounded-b-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-white/50 backdrop-blur-sm overflow-x-auto scrollbar-hide">
             <button 
               className={`flex-1 min-w-[100px] py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap px-4 ${activeTab === 'overview' ? 'border-purple-600 text-purple-700 bg-purple-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
               onClick={() => setActiveTab('overview')}
             >
               Overview
             </button>
             <button 
               className={`flex-1 min-w-[120px] py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap px-4 ${activeTab === 'syllabus' ? 'border-purple-600 text-purple-700 bg-purple-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
               onClick={() => setActiveTab('syllabus')}
             >
               Syllabus & Grading
             </button>
             <button 
               className={`flex-1 min-w-[100px] py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap px-4 ${activeTab === 'reviews' ? 'border-purple-600 text-purple-700 bg-purple-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
               onClick={() => setActiveTab('reviews')}
             >
               Reviews ({filteredReviews.length})
             </button>
          </div>

          <div className="p-5 sm:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-3 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    Course Description
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    {description}
                  </p>
                </div>

                {course.syllabus?.learningObjectives && course.syllabus.learningObjectives.length > 0 && (
                   <div>
                     <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-3 uppercase tracking-wider">
                       <CheckCircle className="w-4 h-4 text-purple-600" />
                       Key Concepts
                     </h4>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                       {course.syllabus.learningObjectives.map((obj, i) => (
                         <li key={i} className="text-sm text-gray-700 flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm transition-transform hover:scale-[1.01]">
                           <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0 shadow-sm shadow-purple-200"></span>
                           {obj}
                         </li>
                       ))}
                     </ul>
                   </div>
                )}
                
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  {course.syllabusLink ? (
                    <a 
                      href={course.syllabusLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 text-sm font-bold text-purple-700 bg-white border-2 border-purple-100 hover:border-purple-300 rounded-xl transition-all shadow-sm hover:shadow-md group"
                    >
                      {linkInfo.text}
                      <LinkIcon className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="flex-1 flex items-center justify-center px-4 py-3 text-sm font-bold text-gray-400 bg-gray-100 border-2 border-gray-200 rounded-xl cursor-not-allowed"
                    >
                      {linkInfo.text}
                      <LinkIcon className="w-4 h-4 ml-2" />
                    </button>
                  )}

                  {course.courseCatalogLink && (
                    <a 
                      href={course.courseCatalogLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 text-sm font-bold text-blue-700 bg-white border-2 border-blue-100 hover:border-blue-300 rounded-xl transition-all shadow-sm hover:shadow-md group"
                    >
                      UW Catalog
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                  
                  <a 
                    href={mailtoLink}
                    className="flex-1 flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-800 to-indigo-900 hover:from-purple-700 hover:to-indigo-800 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 group"
                  >
                    Email Registration
                    <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'syllabus' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                {course.syllabus?.grading && course.syllabus.grading.length > 0 ? (
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-3 uppercase tracking-wider">
                      <FileText className="w-4 h-4 text-purple-600" />
                      Grading Criteria
                    </h4>
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50/80">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Component</th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Weight</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                          {course.syllabus.grading.map((item, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}>
                              <td className="px-6 py-3 text-sm text-gray-900 font-medium">{item.item}</td>
                              <td className="px-6 py-3 text-sm text-gray-900 text-right font-bold text-purple-700">{item.weight}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500 bg-white rounded-xl border-2 border-dashed border-gray-200">
                    <Info className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                    <p>Detailed grading information not available for this specific section.</p>
                  </div>
                )}

                {course.syllabus?.books && course.syllabus.books.length > 0 && (
                   <div>
                     <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-3 uppercase tracking-wider">
                       <Book className="w-4 h-4 text-purple-600" />
                       Required Materials
                     </h4>
                     <ul className="space-y-3">
                       {course.syllabus.books.map((book, i) => (
                         <li key={i} className="text-sm text-gray-700 bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
                           <div className="bg-purple-100 p-1.5 rounded-md mt-0.5">
                             <BookOpen className="w-4 h-4 text-purple-600" />
                           </div>
                           {book}
                         </li>
                       ))}
                     </ul>
                   </div>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
               <div className="animate-in fade-in duration-300">
                 <ReviewList reviews={filteredReviews} />
                 <ReviewForm 
                   courseId={course.code} 
                   courseTitle={course.title} 
                   defaultProfessor={course.instructor}
                   onReviewSubmitted={onReviewSubmitted}
                 />
               </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
