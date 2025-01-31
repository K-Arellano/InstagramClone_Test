import React from 'react';
import Head from 'next/head';
import AuthLayout from '../components/authlayout';
import MobileMockup from '../components/mobilemockup';
import LoginForm from '../components/loginform';
import AuthFooter from '../components/AuthFooter';
import Footer from '../components/PageFooter'; // Import Footer

const Login: React.FC = () => (
  <>
    <Head>
      <title>Instagram • Login</title>
      <meta name="description" content="Instagram Clone" />
      <link rel="icon" href="/instagram.png" />
    </Head>
      <div className="mt-[-110px]">
    <AuthLayout>
      <MobileMockup />
      <div className="flex flex-col items-center">
        <LoginForm />
        <AuthFooter />
      </div>
    </AuthLayout>
    <Footer /> {/* Add the actual footer here */}
    </div>
  </>
);

export default Login;
