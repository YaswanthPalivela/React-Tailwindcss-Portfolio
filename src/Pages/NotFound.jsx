import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl mt-4 text-gray-600">Oops! Page not found.</p>
        <Link className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
