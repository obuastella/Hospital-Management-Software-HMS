// components/DoctorSearch.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  name: string;
  icon: string;
}

const DoctorSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const categories = [
    { name: "General Surgeon", icon: "/images/general_surgeon_icon.png" },
    { name: "Obstetrics & Gynecology", icon: "/images/obgyn_icon.png" },
    { name: "Neuro Surgeon", icon: "/images/neuro_surgeon_icon.png" },
    { name: "Pediatric Surgeon", icon: "/images/pediatric_surgeon_icon.png" },
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
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Find your desired doctor</h1>
        <Image
          src="/profilePic.jpg"
          alt="User Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="relative mt-4">
        <input
          type="text"
          placeholder="What doctor you need?"
          className="w-full p-2 pl-10 border rounded-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="absolute left-2 top-2">
          <svg
            className="w-6 h-6 text-gray-500"
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
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        <div className="flex space-x-4 mt-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              <Image
                src="/profilePic.jpg"
                alt={category.name}
                width={48}
                height={48}
              />
              <span className="mt-2 text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Top Doctors</h2>
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {filteredDoctors.map((doctor, index) => (
              <Link href="/telemedicine">
                <div
                  key={index}
                  className="flex items-center p-4 border rounded-lg"
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={40}
                    height={40}
                    className="rounded-[50%]"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{doctor.name}</h3>
                    <p>{doctor.specialty}</p>
                    <p className="text-yellow-500">{doctor.rating} ★</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-red-500 mt-2">No doctor was found</p>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            {selectedCategory && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedCategory.name}
                </h2>
                <p>This is a modal content for {selectedCategory.name}.</p>
              </>
            )}
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorSearch;
