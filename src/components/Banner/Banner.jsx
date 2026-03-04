import React from 'react';
import BannerBg from '../../assets/vector1.png';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="flex gap-6 max-w-6xl mx-auto mt-8 justify-around items-center">
      {/* Banner 1 */}
      <div className=" bg-gradient-to-r from-purple-600 to-indigo-600 w-178 h-42 rounded-xl relative overflow-hidden">
       
        <img
          src={BannerBg}
          alt=""
          className="absolute inset-0 w-48 h-48 object-cover"
        />
        <img
          src={BannerBg}
          alt=""
          className="absolute inset-0 w-48 h-48 ml-92 object-cover transform scale-x-[-1]"
        />
        <h2 className="text-3xl text-center mt-16 text-white md:text-2xl relative z-10">
          In-Progress
        </h2>
                <h2 className="text-4xl font-bold mt-2 text-center">{inProgressCount}</h2>

      </div>

      {/* Banner 2 */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 w-178 h-42 rounded-xl relative overflow-hidden">
        <img
          src={BannerBg}
          alt=""
          className="absolute inset-0 w-48 h-48 object-cover"
        />
        <img
          src={BannerBg}
          alt=""
          className="absolute inset-0 w-48 h-48 ml-92 object-cover transform scale-x-[-1]"
        />
        <h2 className="text-3xl mt-16 text-center text-white md:text-2xl relative z-10">Resolved</h2>
                <h2 className="text-4xl text-center font-bold mt-2">{resolvedCount}</h2>

      </div>
    </div>
  );
};

export default Banner;