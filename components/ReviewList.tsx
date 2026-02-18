import React from 'react';
import { Review } from '../types';
import { Quote, User } from 'lucide-react';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <p>No reviews available for this specific course/instructor combination yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
        Student Feedback ({reviews.length})
      </h3>
      <div className="grid gap-4 max-h-[400px] overflow-y-auto pr-2">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <Quote className="w-5 h-5 text-purple-200 fill-purple-100" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line mb-3">
                  "{review.content}"
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <User className="w-3 h-3 text-gray-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-900">
                      {review.author || "Anonymous"}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    Class of {review.year} • Prof. {review.professor}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
