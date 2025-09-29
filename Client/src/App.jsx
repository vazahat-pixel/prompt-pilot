import React from "react";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 font-sans text-gray-800">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
