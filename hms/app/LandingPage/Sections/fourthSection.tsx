import React from 'react';

const FourthSection: React.FC = () => {
  return (
    <div className="p-8 font-sans pt-24 pb-24">
      <div className="text-center mb-16 flex flex-row gap-[200px] items-center justify-center ">
        <div>
          <h1 className="text-3xl font-bold w-[350px]">
            We Make It <span className="text-green-700">Easy</span> By Keeping
            Things Simple
          </h1>
        </div>
        <div>
          <p className="mt-4 text-gray-600 w-[520px] justify">
            Our Approach Is To Demystify Medical Information, Streamline
            Processes, And Prioritize Clear Communication. Whether You’re
            Seeking Information, Scheduling Appointments, Or Accessing Care.
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-8">
        <div className="bg-gray-100 p-6 rounded-lg text-center relative flex-1">
          <div className="text-4xl mb-4">🏥</div>
          <h2 className="text-xl font-semibold mb-2">
            Provide <span className="text-blue-500">General Medical</span>{' '}
            Services for Everyone
          </h2>
          <p className="text-gray-600">
            We understand that navigating the world of healthcare can be
            overwhelming.
          </p>
          <div className="absolute bottom-4 right-4 text-blue-500 text-2xl">
            ➔
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center relative flex-1">
          <div className="text-4xl mb-4">💡</div>
          <h2 className="text-xl font-semibold mb-2">
            Professional{' '}
            <span className="text-blue-500">Mental Health Consultation</span>{' '}
            for Everyone
          </h2>
          <p className="text-gray-600">
            You can schedule an appointment directly with a dermatologist
            without a referral.
          </p>
          <div className="absolute bottom-4 right-4 text-blue-500 text-2xl">
            ➔
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center relative flex-1">
          <div className="text-4xl mb-4">❤️</div>
          <h2 className="text-xl font-semibold mb-2">
            Deliver Life <span className="text-blue-500">Wellness Care</span>{' '}
            for Everyone Health
          </h2>
          <p className="text-gray-600">
            Don’t hesitate to ask questions about your condition, treatment
            options, and any concerns you have.
          </p>
          <div className="absolute bottom-4 right-4 text-blue-500 text-2xl">
            ➔
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
