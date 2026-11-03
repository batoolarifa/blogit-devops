
import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

import { TbBrandTinderFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#1b1b1b]'>

      <div>
        <h1 className='w-full text-3xl font-bold text-[#bae51a]'>
          <TbBrandTinderFilled size={35} />
        </h1>

        <p className='py-4 text-gray-400'>
          Whether you're a seasoned blogger or just starting, our platform makes it easy to create, connect, and inspire. Join us today and let your voice be heard!.
        </p>

        <div className='flex justify-between md:w-[75%] my-6 text-gray-400'>
          <FaFacebookSquare size={30} className='hover:text-[#bae51a] transition-colors cursor-pointer' />
          <FaInstagram size={30} className='hover:text-[#bae51a] transition-colors cursor-pointer' />
          <FaTwitterSquare size={30} className='hover:text-[#bae51a] transition-colors cursor-pointer' />
          <FaGithubSquare size={30} className='hover:text-[#bae51a] transition-colors cursor-pointer' />
          <FaDribbbleSquare size={30} className='hover:text-[#bae51a] transition-colors cursor-pointer' />
        </div>
      </div>

      <div className='lg:col-span-2 flex justify-between mt-6'>

        <div>
          <h6 className='font-medium text-white'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Analytics</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Marketing</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Commerce</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Insights</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-white'>Support</h6>
          <ul>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Pricing</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Documentation</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Guides</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>API Status</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-white'>Company</h6>
          <ul>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>About</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Blog</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Jobs</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Press</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Careers</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-white'>Legal</h6>
          <ul>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Claim</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Policy</li>
            <li className='py-2 text-sm text-gray-400 hover:text-[#bae51a] transition-colors'>Terms</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
