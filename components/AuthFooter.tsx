import React from 'react';
import Image from 'next/image';

const AuthFooter: React.FC = () => (
    <div className="text-center mt-4">
        <div className="mt-2 flex max-w-[350px] justify-center border  md:border-gray-300 border-transparent  bg-white py-5 text-[14px] pl-11 pr-5">
      <p className="text-sm ml-6">
        Dont have an account? <span className="text-blue-500 cursor-pointer mr-10">Sign up</span>
      </p>
        </div>
      <p className="text-sm mt-4 md-10">Get the app.</p>
      <div className="flex justify-center gap-3 mt-8">
        <Image src="/playstore.png" alt="Google Play" width={120} height={40} />
        <Image src="/appstore.png" alt="App Store" width={120} height={40} />
      </div>
    </div>
  );

export default AuthFooter;
