"use client"
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const CarexaSection: React.FC = () => {
  return (
    <div className="bg-[#045357] pt-28 pb-28">
      <div className=" w-[400px] ml-40">
        <h2 className="text-4xl font-bold text-white">
          Discover <span className="text-green-400 underline">Carexa</span>
        </h2>
        <p className="mt-2 text-gray-300">
          Carexa is your personal health advisor who can help you discover new
          health tips tailored to your needs.
        </p>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center mt-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/images/carexa/carexa.png"
            alt="Carexa"
            width={500}
            height={500}
            className="rounded-lg ml-28"
          />
        </div>
        <div className="lineContainer mb-[230px]">
          <div className="line text-green-700 font-bold text-xl">----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -- --- -----</div>
        </div>
        <div className="md:w-1/2 pr-20 h-[400px]">
          <div className="mt-8 bg-gray-800 p-5 rounded-lg">
            <div className="flex items-center mb-4">
              <Image
                src="/images/carexa/carexa.png"
                alt="Carexa"
                width={50}
                height={50}
                className="rounded-full border-[2px] border-green-700"
              />
              <div className="ml-4">
                <p className="text-green-400">Carexa</p>
                <p className="text-gray-400 text-sm">
                  You can talk to me about anything health-related
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-green-700 p-4 rounded-lg shadow-md">
                <p>His token's blowing up on Euterpe 👀 Invested lately?</p>
              </div>
              <div className="bg-green-700 p-4 rounded-lg shadow-md">
                <p>
                  Nah, just vibing to new stuff lately. Any hidden gems I should
                  know about? 😉
                </p>
              </div>
              <div className="bg-green-700 p-4 rounded-lg shadow-md">
                <p>
                  Always! This artist Solis - soulful voice, totally your style.
                  Check her out!
                </p>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Your message..."
                className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes move {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .lineContainer {
          width: 28%;
          overflow: hidden;
          background-color: #045357;
          position: relative;
          height: 20px;
        }

        .line {
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          background: repeating-linear-gradient(
            to right,
            black,
            black 50px,
            transparent 10px,
            transparent 20px,
          );
          animation: move 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CarexaSection;
