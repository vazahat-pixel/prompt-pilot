import React from "react";
import { Navigate } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">PromptPilot</h1>
      <ul className="flex gap-6 text-gray-600">
        <li className="hover:text-blue-600 cursor-pointer"><a href="/*">Home</a></li>
        <li className="hover:text-blue-600 cursor-pointer"><a href="/about">About</a></li>
      </ul>
      <div className="flex items-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          <a href="/login">Login</a>
        </button>
        <button className="ml-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">
          <a href="/login">Sign Up</a>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
