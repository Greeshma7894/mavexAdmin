import React from 'react';
import { useNavigate } from 'react-router-dom';

const Plan = () => {
  const navigate = useNavigate(); // Hook for navigation

  const countries = [
    { name: 'India', flag: 'https://flagcdn.com/in.svg' },
    { name: 'Australia', flag: 'https://flagcdn.com/au.svg' },
    { name: 'UK', flag: 'https://flagcdn.com/gb.svg' },
    { name: 'USA', flag: 'https://flagcdn.com/us.svg' },
    { name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
    { name: 'Moldova', flag: 'https://flagcdn.com/md.svg' },
    { name: 'Ireland', flag: 'https://flagcdn.com/ie.svg' },
    { name: 'France', flag: 'https://flagcdn.com/fr.svg' },
    { name: 'Germany', flag: 'https://flagcdn.com/de.svg' },
    { name: 'Japan', flag: 'https://flagcdn.com/jp.svg' },
    // { name: 'Italy', flag: 'https://flagcdn.com/it.svg' },
    // { name: 'Spain', flag: 'https://flagcdn.com/es.svg' },
    // { name: 'Brazil', flag: 'https://flagcdn.com/br.svg' },
    // { name: 'Mexico', flag: 'https://flagcdn.com/mx.svg' },
    // { name: 'South Africa', flag: 'https://flagcdn.com/za.svg' },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-start text-gray-800 mb-8 ml-20">
        Courses by <span className="text-orange-500">Country</span>
      </h1>
      
      <button
        className="absolute top-6 right-6 sm:right-8 bg-blue-500 hover:bg-red-500 text-white py-2 px-4 sm:py-2 sm:px-5 rounded-lg"
        onClick={() => navigate('/create-plan')} // Navigate to the CreatePlan page
      >
        Create +
      </button>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-20 px-4 sm:px-6 md:px-12 lg:px-20 mt-16">
        {countries.map((country, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-200 rounded-2xl shadow-md flex-shrink-0"
            style={{ width: '150px' }} // Consistent width for all country containers
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-full h-24 object-cover rounded-2xl mb-2"
            />
            <span className="text-black font-semibold text-xs sm:text-sm md:text-base text-center">
              {country.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
