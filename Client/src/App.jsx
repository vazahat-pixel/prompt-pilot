import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

import Authen from "./Pages/Authen";

// Dummy authentication check (replace with real auth logic)
const isAuthenticated = () => {
  return !!localStorage.getItem("userToken");
};

function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 font-sans text-gray-800">
        <Nav />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                  <Home />
              }
            />
            <Route path="/login" element={<Authen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
