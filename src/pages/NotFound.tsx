import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      `404 Error: Attempted to access non-existent route: ${location.pathname}`
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
