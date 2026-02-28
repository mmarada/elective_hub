import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Send, User, Calendar, GraduationCap } from 'lucide-react';

interface ReviewFormProps {
  courseId: string;
  courseTitle: string;
  defaultProfessor: string;
  onReviewSubmitted: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ courseId, courseTitle, defaultProfessor, onReviewSubmitted }) => {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [professor, setProfessor] = useState(defaultProfessor);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!supabase) {
    return (
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Send className="w-5 h-5 text-gray-400" />
          Write a Review
        </h3>
        <div className="p-4 bg-gray-50 text-gray-600 rounded-lg text-sm border border-gray-200">
          Review submission is currently disabled. Please configure Supabase environment variables to enable this feature.
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const { error } = await supabase
        .from('reviews')
        .insert([
          {
            course_id: courseId,
            course_title_context: courseTitle,
            professor: professor,
            year: year,
            content: content,
            author: author || 'Anonymous',
          },
        ]);

      if (error) throw error;

      setContent('');
      setAuthor('');
      setSuccess(true);
      onReviewSubmitted();
      
      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      console.error('Error submitting review:', err);
      setError(err.message || 'Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm mt-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-10 -mt-10 pointer-events-none opacity-50"></div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 relative z-10">
        <div className="bg-purple-100 p-2 rounded-lg">
          <Send className="w-5 h-5 text-purple-600" />
        </div>
        Write a Review
      </h3>
      
      {success && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium border border-green-200 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          Review submitted successfully! Thank you for your feedback.
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium border border-red-200 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div>
          <label htmlFor="content" className="block text-sm font-bold text-gray-700 mb-2">
            Your Experience
          </label>
          <textarea
            id="content"
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all bg-gray-50/50 hover:bg-white resize-y text-sm sm:text-base"
            placeholder="Share your thoughts on the course structure, workload, and professor..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label htmlFor="author" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5">
              <User className="w-4 h-4 text-gray-400" /> Name <span className="text-gray-400 font-normal text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              id="author"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all bg-gray-50/50 hover:bg-white text-sm"
              placeholder="Anonymous"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400" /> Year Taken
            </label>
            <select
              id="year"
              required
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all bg-gray-50/50 hover:bg-white text-sm cursor-pointer appearance-none"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              {[0, 1, 2, 3].map((offset) => {
                const y = new Date().getFullYear() - offset;
                return (
                  <option key={y} value={y}>
                    {y}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="professor" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-gray-400" /> Professor
            </label>
            <input
              type="text"
              id="professor"
              required
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all bg-gray-50/50 hover:bg-white text-sm"
              placeholder="Professor Name"
              value={professor}
              onChange={(e) => setProfessor(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed transform-none' : ''
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Submitting...
              </span>
            ) : (
              'Submit Review'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
