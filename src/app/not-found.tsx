import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-teal-600 mb-6">404</h1>
        <div className="w-full flex justify-center mb-8">
          <p className="text-3xl text-teal-700 font-black whitespace-nowrap">This page doesn't seem to exist.</p>
        </div>
        <p className="text-gray-800 font-semibold text-lg mb-10 leading-relaxed">
          We couldn't find the page you're looking for.<br />
          It might have been moved or deleted.<br />
          Let's get you back on track!
        </p>
        <Link 
          href="/"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
