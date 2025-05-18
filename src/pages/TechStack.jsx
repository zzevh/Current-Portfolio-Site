import React from 'react';
import DevDesign from '../components/DevDesign';
import Apps from '../components/Apps'

const TechStack = () => {
  return (
    <div className='w-[65%] mx-auto mt-36 flex flex-col items-start text-left'>
      <h1 className='text-5xl font-black text-left'>Tech Stack</h1>
      <p className='text-lg text-[#a5a3a3] mt-2 text-left'>The dev tools, apps, devices, and games I use and play.</p>
      <div className='h-0.5 w-full bg-[#252525] mt-4 mb-4'></div>
      <h2 className='text-[#808080] text-4xl font-extrabold mt-5'>Dev & Design</h2>
      <DevDesign />
      <h2 className='text-[#808080] text-4xl font-extrabold mt-12'>Apps</h2>
      <Apps />
    </div>
  );
};

export default TechStack; 