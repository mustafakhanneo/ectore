"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Banner = () => {
    const swiperRef = useRef<SwiperCore>();  
    const banner = [{
        url: "https://picsum.photos/1530/500",
        title: "Summer Collection",
        description: "Step into Summer with Style! Discover our vibrant Summer Collection, where lightweight fabrics, bright colors, and trendy designs come together to keep you cool and chic all season long. Shop now and refresh your wardrobe with the latest summer essentials!"
      },
      {
        url: "https://picsum.photos/1530/500",
        title: "Winter Collection",
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/1530/500",
        title: "Exclusive Collection",
        description: "Experience Luxury with our Exclusive Collection! Indulge in unique, high-end pieces crafted with exquisite attention to detail. Perfect for making a statement, our exclusive line offers the ultimate in fashion and sophistication. Elevate your style with these timeless pieces."
      },
      {
        url: "https://picsum.photos/1530/500",
        title: "Limited Collection",
        description: "Don't Miss Out on Our Limited Collection! Discover rare and unique pieces available for a short time only. Each item in this collection is designed to stand out and is perfect for those who love to wear something truly special. Shop now before they're gone!"
      },
      ]
    
  return (
    <div>
        <div className='flex relative z-0'>
        <Swiper
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        loop
        spaceBetween={10}
        slidesPerView={1}
        modules={[Autoplay]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
        {banner.map((item, index) => (
      <SwiperSlide key={index}>
        <img
          src={item.url}
          alt="image 1"
          className="lg:h-[500px] md:h-[300px] h-[250px] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-row h-full w-full items-center justify-between bg-black/30">
        <div className='flex items-center justify-start sm:p-4 p-0 z-10'>
        <button className='bg-transparent items-center text-white hover:text-black hover:bg-white/60 rounded-full p-2' onClick={() => swiperRef.current?.slidePrev()}>
            <IoChevronBackOutline className='sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]'/>
        </button>
        </div>
          <div className="w-2/3 pt-16 text-center md:w-2/4">
            <p
              className="mb-8 font-adelia text-xl md:text-4xl text-white lg:text-5xl"
            >
              {item.title}
            </p>
            <p
              className="line-clamp-3 lg:mb-12 md:mb-6 mb-5 font-sans text-xs md:text-sm text-white lg:text-lg opacity-80"
            >
              {item.description}
            </p>
            <div className="flex justify-center sm:gap-10 gap-5">
              <button className="rounded-lg font-sans lg:px-4 md:px-3 px-2 lg:py-3 md:py-2 py-1 bg-white text-xs md:text-sm text-black lg:text-lg">
                Explore
              </button>
              <button className="rounded-lg font-sans lg:px-4 md:px-3 px-2 lg:py-3 md:py-2 py-1 bg-white text-xs md:text-sm text-black lg:text-lg" onClick={() => {console.log("gallery")}}>
                Gallery
              </button>
            </div>
          </div>
          <div className='flex items-center justify-end sm:p-4 p-0 z-10'>
      <button className='bg-transparent text-white hover:text-black hover:bg-white/60 rounded-full p-2' onClick={() => swiperRef.current?.slideNext()}>
      <IoChevronForwardOutline className='sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]' />
        </button>
        </div>
        </div>
      </SwiperSlide>))}

        </Swiper>
        </div>
        
    </div>
  )
}

export default Banner