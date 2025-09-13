import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="relative overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-16 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-5 bg-gray-200 rounded w-12"></div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        <div className="space-y-2 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;