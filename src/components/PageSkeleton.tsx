import React from 'react';

interface PageSkeletonProps {
  type?: 'hero' | 'cards' | 'list' | 'timeline';
}

const PageSkeleton: React.FC<PageSkeletonProps> = ({ type = 'hero' }) => {
  if (type === 'hero') {
    return (
      <div className="pt-16 animate-pulse">
        {/* Hero Skeleton */}
        <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
            <div className="h-12 bg-gray-300 rounded-lg w-2/3 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </section>

        {/* Content Skeleton */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-xl mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-3 w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (type === 'timeline') {
    return (
      <div className="pt-16 animate-pulse">
        {/* Hero Skeleton */}
        <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
            <div className="h-12 bg-gray-300 rounded-lg w-1/2 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </section>

        {/* Timeline Skeleton */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 space-y-32">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flex flex-col items-center sm:flex-row ${
                i % 2 === 0 ? "sm:justify-start sm:pl-8" : "sm:justify-end sm:pr-8"
              }`}>
                <div className={`max-w-lg bg-white rounded-3xl p-8 shadow-xl ${
                  i % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
                }`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gray-300 rounded-xl"></div>
                    <div className="h-8 bg-gray-300 rounded w-16"></div>
                  </div>
                  <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16 animate-pulse">
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="h-12 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;