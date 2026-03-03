import React from 'react';
import BannerBg from '../../assets/vector1.png'
const Banner = () => {
    return (
       <div className='flex justify-between'>
         <div className='bg-[#422AD5] max-w-130 max-h-52 mx-auto mt-8 px-4 mb-14'>
            <div className='relative rounded-2xl overflow-hidden py-20 text-center text-black'>
                 {/* Background Image */}
        <img
          src={BannerBg}
          alt=""
          className="absolute inset-0 w-54 h-54 object-cover"
        />
        <img
          src={BannerBg}
          alt=""
          className="absolute rotate-(270) ml-70 inset-0 w-54 h-54 object-cover"
        />
        
        <h2 className="text-3xl text-white md:text-2xl">
            In-Progress
          </h2>

       

        </div>
            </div>
             <div className='bg-[#422AD5] max-w-130 max-h-52 mx-auto mt-8 px-4 mb-14'>
            <div className='relative rounded-2xl overflow-hidden py-20 text-center text-black'>
                 {/* Background Image */}
        <img
          src={BannerBg}
          alt=""
          className="absolute inset-0 w-54 h-54 object-cover"
        />
        <img
          src={BannerBg}
          alt=""
          className="absolute rotate-(270) ml-70 inset-0 w-54 h-54 object-cover"
        />
      
         

          <h2 className="text-3xl text-white md:text-2xl">
            In-Progress
          </h2>

       

        </div>
            </div>
       </div>
    );
};

export default Banner;