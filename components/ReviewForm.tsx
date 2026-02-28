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
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Send className="w-5 h-5 text-purple-600" />
        Write a Review
      </h3>
      
      {success && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">
          Review submitted successfully!
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Your Review
          </label>
          <textarea
            id="content"
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
            placeholder="Share your experience with this course..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <User className="w-3 h-3" /> Name (Optional)
            </label>
            <input
              type="text"
              id="author"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
              placeholder="Anonymous"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> Year Taken
            </label>
            <input
              type="text"
              id="year"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
              placeholder="e.g. 2025"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="professor" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <GraduationCap className="w-3 h-3" /> Professor
            </label>
            <input
              type="text"
              id="professor"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
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
            className={`px-6 py-2 bg-purple-600 text-white font-medium rounded-lg shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
