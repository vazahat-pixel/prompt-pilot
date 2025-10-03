import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Authen = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

    };
    
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            isSignUp
                ? `Sign Up: ${form.name}, ${form.email}`
                : `Sign In: ${form.email}`
        );
        if (!isSignUp) {
            nav("/home");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4 mt-[-20px]">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 ">
                <div className="flex flex-col items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {isSignUp ? "Create Account" : "Sign In"}
                    </h2>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {isSignUp && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition"
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                </form>
                <div className="mt-6 text-center text-gray-600">
                    {isSignUp ? (
                        <>
                            Already have an account?{" "}
                            <button
                                type="button"
                                className="text-indigo-600 hover:underline font-medium"
                                onClick={() => setIsSignUp(false)}
                            >
                                Sign In
                            </button>
                        </>
                    ) : (
                        <>
                            Don't have an account?{" "}
                            <button
                                type="button"
                                className="text-indigo-600 hover:underline font-medium"
                                onClick={() => setIsSignUp(true)}
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Authen;