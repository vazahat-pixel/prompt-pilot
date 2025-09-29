import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <span className="text-sm">&copy; {new Date().getFullYear()} Prompt Pilot. All rights reserved.</span>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
