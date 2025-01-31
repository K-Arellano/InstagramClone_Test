/* eslint-disable arrow-body-style */
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center ">
      <div className="flex flex-col lg:flex-row">{children}</div>
    </div>
  );
};

export default AuthLayout;
