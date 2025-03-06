import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(`🚨 404 Error: Page not found - ${location.pathname}`);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* GIF Image */}
      <img 
         src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" 
        alt="Page Not Found"
        className="w-64 h-64 object-cover mb-6"
      />

      {/* Main Text */}
      <p className="text-lg text-gray-600 mt-4">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Return Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 focus:ring focus:ring-blue-300"
      >
        Return to Home
      </Link>
    </main>
  );
};

export default NotFound;
