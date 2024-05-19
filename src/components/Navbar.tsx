// "use client";
// import { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import '../app/globals.css';
// import Link from 'next/link';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//       <h1 className='w-full text-3xl font-bold text-[white]'>WsCube Tech.</h1>
//       <ul className='hidden md:flex'>
//         <li className='p-4'><Link href="/cards">Home</Link></li>
//         <li className='p-4'><Link href="/analytics">Skills</Link></li>
//         <li className='p-4'><Link href="/hero">Project</Link></li>
//         <li className='p-4'><Link href="/footer">About</Link></li>
//       </ul>
//       <div onClick={handleNav} className='block md:hidden'>
//           {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
//       </div>
//       <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//         <h1 className='w-full text-3xl font-bold text-[black] m-4'>REACT.</h1>
//           <li className='p-4 border-b border-gray-600'>Home</li>
//           <li className='p-4 border-b border-gray-600'>Skills</li>
//           <li className='p-4 border-b border-gray-600'>Projects</li>
//           <li className='p-4 border-b border-gray-600'>About</li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

// components/Navbar.tsx

"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../app/globals.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
<h1 className="w-full text-3xl font-bold text-[white]" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>sg.</h1>

      <ul className="hidden md:flex">
        <li className="p-4">
          <button className="text-lg" onClick={() => handleScroll("home")}>Home</button>
        </li>
        <li className="p-4">
          <button  className="text-lg"onClick={() => handleScroll("skills")}>Skills</button>
        </li>
        <li className="p-4">
          <button  className="text-lg"onClick={() => handleScroll("projects")}>Projects</button>
        </li>
        <li className="p-4">
          <button className="text-lg" onClick={() => handleScroll("contact")}>Contact</button>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[black] m-4">REACT.</h1>
        <li className="p-4 border-b border-gray-600">
          <button onClick={() => handleScroll("home")}>Home</button>
        </li>
        <li className="p-4 border-b border-gray-600">
          <button onClick={() => handleScroll("skills")}>Skills</button>
        </li>
        <li className="p-4 border-b border-gray-600">
          <button onClick={() => handleScroll("cards")}>Projects</button>
        </li>
        <li className="p-4 border-b border-gray-600">
          <button onClick={() => handleScroll("about")}>About</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
