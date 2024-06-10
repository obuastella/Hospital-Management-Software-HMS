import React from 'react';
import Image from 'next/image';

const SecondSection: React.FC = () => {
  return (
    <div className="bg-[#E6E4E5 ] py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative h-[700px]">
            <Image
              src="/images/consultant.jpg"
              alt="Doctor"
              width={700}
              height={700}
              className="w-full h-[650px]"
            />
            <div className="absolute top-2 left-2 bg-white p-4 rounded-lg shadow-md">
              <p>Member Asked</p>
              <p className="text-sm">Added Thursday at 1:00 PM</p>
            </div>
            <div className="absolute bottom-2 left-2 bg-white p-4 rounded-lg shadow-md">
              <p>Doctors Note</p>
              <p className="text-sm">Added Thursday at 1:00 PM</p>
            </div>
            <div className="absolute top-2 right-2 bg-white p-4 rounded-lg shadow-md">
              <p>Excellent</p>
              <p className="text-sm">98%</p>
            </div>
            <div className="absolute bottom-2 right-2 bg-white p-4 rounded-lg shadow-md">
              <p>Feel Support Always</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 pl-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Top-Quality Virtual Primary Care Visits
          </h2>
          <p className="mt-4 text-gray-600">
            Book A Virtual Care Visit, Chat Via Video On Your Smartphone, And
            Pick Up Your Prescription From Your Pharmacy. Our Advanced
            Technology Is Integrated With Most Major Health Insurances.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <i className="text-blue-500">✓</i>
              </div>
              <span className="text-gray-700">Meet The Doctor You Want</span>
            </li>
            <li className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <i className="text-blue-500">✓</i>
              </div>
              <span className="text-gray-700">Get The Care You Want</span>
            </li>
            <li className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <i className="text-blue-500">✓</i>
              </div>
              <span className="text-gray-700">Get 24/7 Full Support</span>
            </li>
            <li className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <i className="text-blue-500">✓</i>
              </div>
              <span className="text-gray-700">
                Get The Best Health Services
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
