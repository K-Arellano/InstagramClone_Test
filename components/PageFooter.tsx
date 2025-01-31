/* eslint-disable react/button-has-type */
import React, {useState, useEffect} from 'react';

const Footer: React.FC = () => {


    const [isMobile, setIsMobile] = useState(false); // State for mobile check
  
  
  useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth <= 375); // Check if screen width is 375px or less
     };
     
     handleResize(); // Set initial state based on current window size
     window.addEventListener('resize', handleResize);
     
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);
 return (
  <footer 
  className="w-full flex flex-col items-center text-gray-500 text-xs -mt-4 px-4"
  style={{ 
    marginBottom: isMobile ? '30%' : '0',
    marginTop: isMobile ? '20%' : '0', // Adjust this value as needed
  }}
>
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
}
export default Footer;
