/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E6E4E5] py-16">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <div className="flex flex-row items-center gap-4 h-auto mb-6">
            <Image
              src="/images/Logo.png"
              alt="logo"
              className="rounded-[50px]"
              width={70}
              height={70}
            />
            <h2 className="uppercase text-xl font-bold">Health Guardian</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Your Voice Matters, And Early Birds Get The Opportunity To Provide
            Feedback And Influence
          </p>
          <button className="bg-[#063b3f] hover:bg-[#045357] transition duration-300 hover:shadow-lg hover:translate-x-4 text-white px-6 py-2 rounded-full moving-wave-button">
            Book Consultation
          </button>
        </div>
        <div className="w-auto mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Info</h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <a href="#" className="effect">Contact</a>
            </li>
            <li className="mb-2">
              <a href="#" className="effect">FAQ</a>
            </li>
            <li className="mb-2">
              <a href="#" className="effect">Terms & Condition</a>
            </li>
            <li className="mb-2">
              <a href="#" className="effect">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="w-auto mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Learn</h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <a href="#" className="effect">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="effect">Become Member</a>
            </li>
            <li className="mb-2">
              <a href="#" className="effect">Health Calculator</a>
            </li>
          </ul>
        </div>
        <div className="w-auto mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Community</h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <a href="#" className="effect">Discord</a>
            </li>
          </ul>
        </div>
        <div className="w-auto mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Stay with Us</h3>
          <ul className="text-gray-600 mb-4">
            <li className="mb-2">
              <a href="" className="effect">info@join-health-guardian.com</a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <a href="#" className='w-[30px] h-[30px]'>
              <img src="/images/socials/facebook-Logo-2.png" alt="Facebook" className='h-full w-full' /> 
            </a>
            <a href="#" className='w-[30px] h-[30px] rounded-[50px]'>
              <img src="/images/socials/instagram-circle-logo-4.jpg" alt="Instagram" className='rounded-[50px] h-full w-full' />
            </a>
            <a href="#" className='w-[30px] h-[30px] rounded-[50px]'>
              <img src="/images/socials/Twitter-new-logo.jpeg" alt="Twitter" className='rounded-[50px] h-full w-full' />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-8">
        Design and content Copyright 2024© Health Guardian, The4Coders All
        rights reserved
      </div>
      <style jsx>{`
        .effect {
          position: relative;
          transition: transform 0.3s ease, text-decoration 0.3s ease;
        }

        .effect::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #063b3f;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .effect:hover::after {
          transform: scaleX(1);
        }

        .effect:hover {
          transform: scale(1.1);
        }

        .moving-wave-button {
          position: relative;
          overflow: hidden;
        }

        .moving-wave-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0.05)
          );
          transform: skewX(-35deg);
          animation: movingWave 1.8s linear infinite;
        }

        @keyframes movingWave {
          0% {
            left: -120%;
          }
          100% {
            left: 120%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
