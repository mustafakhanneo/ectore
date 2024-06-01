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

const Catcarousel = () => {
    const swiperRef = useRef<SwiperCore>(); 
    const [currentIndex, setCurrentIndex] = useState<number>(swiperRef.current?.realIndex ?? 0)
    const [isHover, setIsHover] = useState(false);
    const handleIndex = () => {
        if (swiperRef.current?.realIndex !== undefined) {
          setCurrentIndex(swiperRef.current.realIndex);
          console.log(swiperRef.current);
        }
      };
     
    const catcarousel = [
      {
        url: "https://picsum.photos/100/100",
        title: "Winter",
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/100/100",
        title: "Exclusive",
        description: "Experience Luxury with our Exclusive Collection! Indulge in unique, high-end pieces crafted with exquisite attention to detail. Perfect for making a statement, our exclusive line offers the ultimate in fashion and sophistication. Elevate your style with these timeless pieces."
      },
      {
        url: "https://picsum.photos/100/100",
        title: "Limited",
        description: "Don't Miss Out on Our Limited Collection! Discover rare and unique pieces available for a short time only. Each item in this collection is designed to stand out and is perfect for those who love to wear something truly special. Shop now before they're gone!"
      },
      {
        url: "https://picsum.photos/100/100",
        title: "Summer",
        description: "Step into Summer with Style! Discover our vibrant Summer Collection, where lightweight fabrics, bright colors, and trendy designs come together to keep you cool and chic all season long. Shop now and refresh your wardrobe with the latest summer essentials!"
      },
      {
        url: "https://picsum.photos/100/100",
        title: "Winter",
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/100/100",
        title: "Exclusive",
        description: "Experience Luxury with our Exclusive Collection! Indulge in unique, high-end pieces crafted with exquisite attention to detail. Perfect for making a statement, our exclusive line offers the ultimate in fashion and sophistication. Elevate your style with these timeless pieces."
      },
      {
        url: "https://picsum.photos/100/100",
        title: "Limited",
        description: "Don't Miss Out on Our Limited Collection! Discover rare and unique pieces available for a short time only. Each item in this collection is designed to stand out and is perfect for those who love to wear something truly special. Shop now before they're gone!"
      },
      {
        url: "https://picsum.photos/100/100",
        title: "Summer",
        description: "Step into Summer with Style! Discover our vibrant Summer Collection, where lightweight fabrics, bright colors, and trendy designs come together to keep you cool and chic all season long. Shop now and refresh your wardrobe with the latest summer essentials!"
      },
      
      ]

      const handleMouseEnter = () => {
        setIsHover(true);
      };
    
      const handleMouseLeave = () => {
        setIsHover(false);
      };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex lg:flex-row md:flex-row flex-col'>
        <div className="flex lg:flex-col md:flex-col flex-row justify-center gap-2 bg-white items-center text-black p-4 lg:w-1/4 md:w-1/4">
            <p className='font-tanker lg:text-xl md:text-lg text-sm'>Ectore Premium</p>
            <p className='font-tanker lg:text-xl md:text-lg text-sm'>Shop by Collection</p>
        </div>

    <div className='items-center w-full h-auto bg-white sm:px-8 px-5 lg:w-3/4 md:w-3/4'>
        
        <div className="flex relative z-0 px-2 pt-4 pb-8 items-center ">
        <Swiper
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        loop
        slidesPerView={3}
        spaceBetween={0}
        breakpoints={{
            320: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            375: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
        modules={[Autoplay, Navigation, Pagination]}
        onSlideChange={handleIndex}
        onSwiper={(swiper) => console.log(swiper)}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
        {catcarousel.map((item, index) => (
      <SwiperSlide key={index}>
        <div className='flex flex-col gap-2 justify-center items-center'>
        <div className="lg:h-[80px] md:h-[50px] h-[50px] lg:w-[80px] md:w-[50px] w-[50px]">
        <img
          src={item.url}
          sizes='w-full h-full'
          alt={item.title}
          className='rounded-full w-full h-full'
        />
        </div>
        <div>
        <p className='lg:text-sm md:text-sm text-xs font-archivo font-bold text-black'>{item.title}</p>
        </div>
        </div>
      </SwiperSlide>))}

        </Swiper>
        <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {catcarousel.map((item, index) => (
        <span key={index} onClick={() => swiperRef.current?.slideTo(index)} className={`${currentIndex === index ? 'w-8 bg-black/50' : 'w-4 bg-black/20'} block h-1 cursor-pointer rounded-2xl transition-all`}></span>
        ))}
        </div>

        <div className='absolute insect-0 left-0 z-50 flex -translate-x-2/4'>
        <button className={`bg-transparent items-center ${isHover ? "text-black/50 hover:text-white hover:bg-black/60" : "text-transparent" }  rounded-full p-2`} onClick={() => swiperRef.current?.slidePrev()}>
            <IoChevronBackOutline className='sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]'/>
        </button>
        </div>
        <div className='absolute insect-0 right-0 z-50 flex translate-x-2/4'>
      <button className={`bg-transparent ${isHover ? "text-black/50 hover:text-white hover:bg-black/60" : "text-transparent" }  rounded-full p-2`} onClick={() => swiperRef.current?.slideNext()}>
      <IoChevronForwardOutline className='sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]' />
        </button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Catcarousel