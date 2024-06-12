"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import styles from "./TelemedicineSetup.module.css";

interface Category {
  name: string;
  icon: string;
}

const TelemedicineSetup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { name: "General Surgeon", icon: "/doctor1.jpg" },
    { name: "Obstetrics & Gynecology", icon: "/doctor2.jpg" },
    { name: "Neuro Surgeon", icon: "/doctor3.jpg" },
    { name: "Pediatric Surgeon", icon: "/doctor4.jpg" },
    { name: "Obstetrics & Gynecology", icon: "/doctor2.jpg" },
    { name: "General Surgeon", icon: "/doctor1.jpg" },
  ];

  const topDoctors = [
    {
      name: "Dr. Lee Ik Jun",
      specialty: "General Surgeon",
      rating: 5.0,
      image: "/profilePic4.jpg",
    },
    {
      name: "Dr. Adeyemo Ademola",
      specialty: "Neuro Surgeon",
      rating: 5.0,
      image: "/profilePic.jpg",
    },
    {
      name: "Dr. Obua Stella",
      specialty: "Neuro Surgeon",
      rating: 5.0,
      image: "/profilePic6.jpg",
    },
    {
      name: "Dr. Omojola Zion",
      specialty: "Neuro Surgeon",
      rating: 5.0,
      image: "/profilePic2.jpg",
    },
    {
      name: "Dr. Lee Ik Jun",
      specialty: "General Surgeon",
      rating: 5.0,
      image: "/profilePic4.jpg",
    },
    {
      name: "Dr. Omojola Zion",
      specialty: "Neuro Surgeon",
      rating: 5.0,
      image: "/profilePic2.jpg",
    },
  ];

  const filteredDoctors = topDoctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <main className={`bg-[#e0f2f1] min-h-screen ${styles.fadeIn}`}>
      <div className="p-8 max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <Link href="/">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.jpg"
                alt="Health Guardian Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              {/* <span className="text-2xl font-bold">Health Guardian</span> */}
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#" legacyBehavior>
              <a className="text-[#045357] hover:text-[#033d40] transition">
                About
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="text-[#045357] hover:text-[#033d40] transition">
                Academy
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="text-[#045357] hover:text-[#033d40] transition">
                Features
              </a>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 relative">
              <Image
                src="/profilePic.jpg"
                alt="profilePic"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[#045357] focus:outline-none p-2 rounded-full bg-[#b2dfdb] hover:bg-[#80cbc4] transition"
              >
                {menuOpen ? (
                  <XIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </header>
        {menuOpen && (
          <nav className="md:hidden flex flex-col space-y-4 mb-8">
            <Link href="#" legacyBehavior>
              <a className="text-[#045357] hover:text-[#033d40] transition">
                About
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="text-[#045357] hover:text-[#033d40] transition">
                Academy
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="text-[#045357] hover:text-[#033d40] transition">
                Features
              </a>
            </Link>
          </nav>
        )}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#045357]">
            Transforming <span className="text-[#033d40]">Healthcare</span>, One
            Virtual Visit at a Time
          </h1>
          <p className="text-[#004d40] mb-8">
            Witness virtual consultations with easy scheduling, collaborative
            diagnosis, and real-time communication.
          </p>
          <Link
            href="#doctors"
            className="px-8 py-3 bg-[#045357] text-white rounded-full hover:bg-[#033d40] transition"
          >
            Find a Doctor
          </Link>
        </div>
        <div className="mb-16 mt-4">
          <h2 className="text-2xl font-semibold mb-4 text-[#045357]">
            Categories
          </h2>
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border rounded-lg cursor-pointer min-w-[150px] bg-white"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="w-24 h-24 relative">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <span className="mt-2 text-center text-[#045357]">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mb-16">
          <input
            type="text"
            placeholder="Search for your favorite doctor"
            className="w-full p-4 pl-5 border rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute right-4 top-4 w-6 h-6 text-[#004d40]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <div>
          <h2
            className="text-2xl font-semibold mb-4 text-[#045357]"
            id="doctors"
          >
            Top Doctors
          </h2>
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <Link key={index} href="/telemedicine" legacyBehavior>
                  <a className="flex items-center p-4 border rounded-lg cursor-pointer bg-white">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-[#045357]">
                        {doctor.name}
                      </h3>
                      <p className="text-[#004d40]">{doctor.specialty}</p>
                      <p className="text-yellow-500">{doctor.rating} ★</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-red-500 mt-2">No doctor was found</p>
          )}
        </div>
        {isModalOpen && selectedCategory && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#045357]">
                {selectedCategory.name}
              </h2>
              <p className="text-[#004d40]">
                This is a modal content for {selectedCategory.name}.
              </p>
              <button
                className="mt-4 px-4 py-2 bg-[#045357] text-white rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default TelemedicineSetup;
