"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { Autoplay, EffectFade, Navigation, Pagination  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    const swiperRef = useRef<SwiperCore>(); 
    const [currentIndex, setCurrentIndex] = useState<number>(swiperRef.current?.realIndex ?? 0)
    const [isHover, setIsHover] = useState(false)
    const handleIndex = () => {
        if (swiperRef.current?.realIndex !== undefined) {
          setCurrentIndex(swiperRef.current.realIndex);
          console.log(swiperRef.current);
        }
      };
     
    const banner = [{
        url: "https://picsum.photos/1500/600",
        title: "Summer Collection",
        description: "Step into Summer with Style! Discover our vibrant Summer Collection, where lightweight fabrics, bright colors, and trendy designs come together to keep you cool and chic all season long. Shop now and refresh your wardrobe with the latest summer essentials!"
      },
      {
        url: "https://picsum.photos/1500/600",
        title: "Winter Collection",
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/1500/600",
        title: "Exclusive Collection",
        description: "Experience Luxury with our Exclusive Collection! Indulge in unique, high-end pieces crafted with exquisite attention to detail. Perfect for making a statement, our exclusive line offers the ultimate in fashion and sophistication. Elevate your style with these timeless pieces."
      },
      {
        url: "https://picsum.photos/1500/600",
        title: "Limited Collection",
        description: "Don't Miss Out on Our Limited Collection! Discover rare and unique pieces available for a short time only. Each item in this collection is designed to stand out and is perfect for those who love to wear something truly special. Shop now before they're gone!"
      },
      ]

      const handleMouseEnter = () => {
        setIsHover(true);
      };
    
      const handleMouseLeave = () => {
        setIsHover(false);
      };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='flex relative z-0'>
        <Swiper
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        loop
        spaceBetween={10}
        slidesPerView={1}
        effect='fade'
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        onSlideChange={handleIndex}
        onSwiper={(swiper) => console.log(swiper)}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
        {banner.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="relative lg:h-[500px] md:h-[350px] h-[250px] w-full">
        <img
          src={item.url}
          sizes='w-full h-full'
          alt="image 1"
          className='w-full h-full'
        />
        </div>
        <div className="absolute inset-0 flex flex-row h-full w-full items-center justify-around bg-black/30">
        <div className='flex items-center justify-start sm:p-4 p-0 z-10'>
        <button className={`bg-transparent items-center ${isHover ? "text-white hover:text-black hover:bg-white/60" : "text-transparent"} rounded-full p-2`} onClick={() => swiperRef.current?.slidePrev()}>
            <IoChevronBackOutline className='sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]'/>
        </button>
        </div>
          <div className="w-full pt-16 text-center md:w-full">
            <p
              className="sm:mb-10 mb-5 font-adelia text-xl md:text-4xl text-white lg:text-5xl"
            >
              {item.title}
            </p>
            <p
              className="line-clamp-3 lg:mb-12 md:mb-6 mb-4 font-sans text-xs md:text-sm text-white font-archivo lg:text-lg opacity-80"
            >
              {item.description}
            </p>
            <div className="flex justify-center sm:gap-10 gap-5">
              <button className="rounded-lg font-archivo lg:px-4 md:px-3 px-2 lg:py-3 md:py-2 py-1 bg-white text-xs md:text-sm text-black lg:text-lg">
                Explore
              </button>
              <button className="rounded-lg font-archivo lg:px-4 md:px-3 px-2 lg:py-3 md:py-2 py-1 bg-white text-xs md:text-sm text-black lg:text-lg" onClick={() => {console.log("gallery")}}>
                Gallery
              </button>
            </div>
          </div>
          <div className='flex items-center justify-end sm:p-4 p-0 z-10'>
      <button className={`bg-transparent ${isHover ? "text-white hover:text-black hover:bg-white/60" : "text-transparent"} rounded-full p-2`} onClick={() => swiperRef.current?.slideNext()}>
      <IoChevronForwardOutline className='sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]' />
        </button>
        </div>
        </div>
      </SwiperSlide>))}

        </Swiper>
        <div className="absolute sm:bottom-4 bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {banner.map((item, index) => (
        <span key={index} onClick={() => swiperRef.current?.slideTo(index)} className={`${currentIndex === index ? 'w-8 bg-white' : 'w-4 bg-white/50'} block h-1 cursor-pointer rounded-2xl transition-all`}></span>
        ))}
        </div>
        </div>
        
    </div>
  )
}

export default Banner