import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center text-gray-500 text-xs mt-6 px-4">
      <div className="flex flex-wrap justify-center gap-2 md:gap-2 lg:gap-4 text-xxs">
        <a href="#">Meta</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Jobs</a>
        <a href="#">Help</a>
        <a href="#">API</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Locations</a>
        <a href="#">Instagram Lite</a>
        <a href="#">Threads</a>
        <a href="#">Contact Uploading & Non-Users</a>
        <a href="#">Meta Verified</a>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <button className="text-gray-500 text-xxs flex items-center">
          English <span className="ml-1">▼</span>
        </button>
        <span className="text-xxs">© 2025 Instagram from Meta</span>
      </div>
    </footer>
  );
};

export default Footer;
