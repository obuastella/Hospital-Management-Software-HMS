'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const [animatedText, setAnimatedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDiv, setCurrentDiv] = useState(0);
  const { ref: firstRef, inView: isFirstInView } = useInView({
    triggerOnce: true,
  });
  const { ref: secondRef, inView: isSecondInView } = useInView({
    triggerOnce: true,
  });

  const divs = [
    { className: 'top-28 right-0', icon: 'bi-capsule', text: 'Medicine' },
    {
      className: 'bottom-56 left-0',
      icon: 'bi-chat-dots-fill',
      text: '24/7 Consultation',
    },
    {
      className: 'bottom-28 right-24',
      icon: 'bi-file-medical-fill',
      text: 'Electronic',
    },
    {
      className: 'top-32 left-24',
      icon: 'bi-hospital-fill',
      text: '25 Clinic Locations',
    },
  ];

  const texts = useMemo(
    () => ['Health', 'Medicine', 'Wellness', 'Fitness', 'Nutrition'],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % divs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [divs.length]);

  useEffect(() => {
    let animatedString = '';
    let isCancelled = false;

    const animateText = () => {
      const delay = 300;

      for (let i = 0; i < texts[currentIndex].length; i++) {
        setTimeout(() => {
          if (isCancelled) return;
          animatedString += texts[currentIndex][i];
          setAnimatedText(animatedString);
        }, i * delay);
      }

      setTimeout(() => {
        if (isCancelled) return;
        document.getElementById('animatedText')?.classList.add('slide-out');
      }, texts[currentIndex].length * delay + 500);
    };

    animateText();

    return () => {
      isCancelled = true;
    };
  }, [currentIndex, texts]);

  const handleAnimationEnd = () => {
    document.getElementById('animatedText')?.classList.remove('slide-out');
    document.getElementById('animatedText')?.classList.add('slide-in');
    setAnimatedText('');
    setTimeout(() => {
      document.getElementById('animatedText')?.classList.remove('slide-in');
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(nextIndex);
    }, 0);
  };

  return (
    <section className="bg-[#E6E4E5] py-12">
      <div className="container mx-auto px-16 flex flex-col md:flex-row items-center h-[100vh]">
        <div
          ref={firstRef}
          className={`first md:w-1/2 mb-8 md:mb-0 h-[600px] pt-20 ${
            isFirstInView ? 'slide-in-left' : ''
          }`}
        >
          <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 pl-10">
            <h2 className="mb-4 text-gray-500 text-[70px]">Where</h2>
            <h2 className="mb-4 text-gray-500 text-[70px]">Tech Meets</h2>
            <h2
              id="animatedText"
              className="text-[#063b3f] slide-in font-extrabold text-[90px]"
              onAnimationEnd={handleAnimationEnd}
            >
              {animatedText} {}
            </h2>
          </div>
          <p className="text-gray-500 text-sm w-[550px] pl-10 mt-10 leading-[1.8]">
            Health Guardian is now open, safe and available online, providing
            clinical excellence with the ease of virtual care. Schedule a
            virtual visit with your doctor at any time of day or night.
          </p>
          <Link href="/signup">
            <button className="bg-[#063b3f] text-white text-[20px] ml-10 mt-12 py-2 px-6 rounded-[50px] hover:bg-[#045357] transition duration-300 h-[60px] w-56 hover:transform hover:translate-x-4 hover:shadow-lg moving-wave-button">
              Check it Out
            </button>
          </Link>
        </div>
        <div
          ref={secondRef}
          className={`second md:w-1/2 relative ${
            isSecondInView ? 'slide-in-right' : ''
          }`}
        >
          <Image
            src="/images/nurse.gif"
            alt="Nurse"
            width={500}
            height={500}
            className="w-full h-[600px] my-5"
            style={{
              borderTopLeftRadius: '200px',
              borderBottomRightRadius: '200px',
              borderBottomLeftRadius: '90px',
              borderTopRightRadius: '70px',
            }}
          />
          {divs.map((div, index) => (
            <div
              key={index}
              className={`absolute ${
                div.className
              } bg-[#E6E4E5] p-3 border-[2px] border-white rounded-[50px] flex items-center space-x-2 blink-animation transition-all duration-1000 ${
                currentDiv === index ? 'fade-in' : 'fade-out'
              }`}
            >
              <i className={`bi ${div.icon} text-[#045357] text-2xl`}></i>
              <span className="text-black text-sm">{div.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Teeth, Brain, Eye */}

      <div className="bg-[#045357] py-12">
        <div className="container mx-auto p-4 bg-white rounded-[30px] bg-opacity-30 backdrop-blur-lg border border-[#E6E4E5] w-[1150px]">
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
            {/* First content */}
            <div className="hop flex flex-col items-start p-4 rounded-lg">
              <Image
                src="/images/system/teeth.png"
                alt="Teeth"
                width={60}
                height={60}
                className="mb-5 rounded-[50px] "
              />
              <h3 className="text-xl text-gray-800 font-bold mb-3">
                Dentistry
              </h3>
              <p className="text-[#E6E4E5] text-sm">
                We are dedicated to providing award-winning dental care and
                ensuring that your time with us is unlike any other dental
                practice.
              </p>
            </div>

            {/* Second content */}
            <div className="hop flex flex-col items-start p-4 rounded-lg">
              <Image
                src="/images/system/brain.png"
                alt="Brain"
                width={60}
                height={60}
                className="mb-5 rounded-[50px]"
              />
              <h3 className="text-xl text-gray-800 font-bold mb-3">
                Neurology
              </h3>
              <p className="text-[#E6E4E5] text-sm">
                A physical exam and a neurological evaluation are likely to be
                performed during your first appointment with a neurologist.
              </p>
            </div>

            {/* Third content */}
            <div className="hop flex flex-col items-start p-4 rounded-lg">
              <Image
                src="/images/system/eye.png"
                alt="Eye"
                width={60}
                height={60}
                className="mb-5 rounded-[50px]"
              />
              <h3 className="text-xl text-gray-800 font-bold mb-3">Eye Care</h3>
              <p className="text-[#E6E4E5] text-sm">
                Our trained specialist can diagnose and treat a wide range of
                eye disorders and aliments using the most up-to-date technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideOut {
          to {
            transform: translateX(40%);
            opacity: 0;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-60%);
            opacity: 0;
          }
        }

        .slide-out {
          animation: slideOut 1s ease forwards;
        }

        .slide-in {
          animation: slideIn 1s ease forwards;
        }

        @keyframes hopLetters {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .hop:hover {
          animation: hopLetters 0.5s infinite;
        }

        @keyframes blink-scale-blur {
          0%,
          100% {
            transform: scale(1);
            filter: blur(0px);
            opacity: 1;
          }
          50% {
            transform: scale(0.5);
            filter: blur(2px);
            opacity: 0.7;
          }
        }

        .blink-animation {
          animation: blink-scale-blur 4s infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.5) translateX(0);
          }
          to {
            opacity: 1;
            transform: scale(1) translateX(30px);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: scale(1) translateY(30px);
          }
          to {
            opacity: 0;
            transform: scale(0.5) translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 2s forwards;
        }

        .fade-out {
          animation: fadeOut 2s forwards;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in-left {
          animation: slideInLeft 2s ease-in-out forwards;
        }

        .slide-in-right {
          animation: slideInRight 2s ease-in-out forwards;
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
    </section>
  );
};

export default HeroSection;
