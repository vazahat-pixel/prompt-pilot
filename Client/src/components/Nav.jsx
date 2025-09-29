import React from "react";

function Nav() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">PromptPilot</h1>
      <ul className="flex gap-6 text-gray-600">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
      </ul>
    </nav>
  );
}

export default Nav;
