import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-4">
        
      

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Irabaruta Shop. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ by irabaruta in Kigali, Rwanda</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
