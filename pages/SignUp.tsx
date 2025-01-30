import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { NextPage } from 'next';
import InstagramSVG from '../components/svgComps/InstagramSVG';

const SignUp: NextPage = () => (
  <div>
    <Head>
      <title>Instagram • Sign up</title>
      <meta name="description" content="Instagram Clone" />
      <link rel="icon" href="/instagram.png" />
    </Head>
    <div className="flex min-h-[100vh] w-full items-center justify-center bg-[#fafafa]">
      <div>
        <div className="flex max-w-[350px] flex-col items-center justify-center border border-stone-300 bg-white">
          <div className="h-auto w-[175px] pt-10 pb-5">
            <InstagramSVG disableDarkMode white={false} />
          </div>
          <div className="px-10 pb-5 text-center font-semibold text-[#8e8e8e]">
            <p>Sign up to see photos and videos from your friends.</p>
          </div>
          <div className="w-full px-10">
            <label htmlFor="signInPageUserName">
              <input
                className="w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                type="text"
                id="signInPageUserName"
                placeholder="Username"
              />
            </label>
            <label htmlFor="signInPageEmail">
              <input
                className="w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                type="email"
                id="signInPageEmail"
                placeholder="Email address"
              />
            </label>
            <label htmlFor="signInPagePassword">
              <input
                className="w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                type="password"
                id="signInPagePassword"
                placeholder="Password"
              />
            </label>
            <button className="my-5 w-full rounded-[4px] bg-[#0095f6] px-2 py-1 text-sm font-semibold text-white" type="button">
              Sign Up
            </button>
          </div>
        </div>
        <div className="mt-2 flex max-w-[350px] justify-center border border-stone-300 bg-white py-5 text-[14px]">
          <p>Have an account?</p>
          <button className="ml-1 font-semibold text-[#0095f6]" type="button" onClick={() => Router.push('/Login')}>
            Log in
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;
