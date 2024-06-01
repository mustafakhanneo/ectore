"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { Autoplay, Navigation, Pagination  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Product = {
    url: string;
    title: string;
    clothes: boolean;
    accessories: boolean;
    price: number;
    tags: string[];
    description: string;
  };

const Bestseller = () => {
    const [options, setOptions] = useState<'clothes' | 'accessories'>("clothes");
    const swiperRef = useRef<SwiperCore>(); 
    const [currentIndex, setCurrentIndex] = useState<number>(swiperRef.current?.realIndex ?? 0)
    const handleIndex = () => {
        if (swiperRef.current?.realIndex !== undefined) {
          setCurrentIndex(swiperRef.current.realIndex);
          console.log(swiperRef.current);
        }
      };

    const products = [
      {
        url: "https://picsum.photos/250/350",
        title: "Warm Wear 360",
        clothes: true,
     accessories: false,
        price: 5478,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/250/350",
        title: "scarf tinglr",
        clothes: false,
     accessories: true,
        price: 4800,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/250/350",
        title: "duktin top",
        clothes: true,
     accessories: false,
        price: 700,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/250/350",
        title: "fisher neclows",
        clothes: false,
     accessories: true,
        price: 580,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/250/350",
        title: "albela tangay",
        clothes: true,
     accessories: false,
        price: 100,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/250/350",
        title: "hustopium fuss",
        clothes: false,
     accessories: true,
        price: 800,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/250/350",
        title: "carpet of culobian",
        clothes: true,
     accessories: false,
        price: 800,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/250/350",
        title: "jewl of gingr",
        clothes: false,
     accessories: true,
        price: 400,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      
      ]
  return (
    <div className='flex flex-col px-4 bg-white'>
        <div className='flex justify-start text-black font-tanker mb-4 mt-2 lg:text-2xl md:text-lg text-sm'>
        <p>Best Seller</p>
        </div>
        <div className='tabs'>
    <div className="flex flex-row justify-between border-b mb-4 border-gray-200">
      <div className="-mb-px flex gap-6" aria-label="Tabs">
        <button
          onClick={() => setOptions('clothes')}
          className={`shrink-0 border-b-2 px-1 pb-2 text-sm font-archivo ${options === 'clothes' ? 'text-sky-600 border-sky-500' : 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 '}`}
        >
          Clothes
        </button>

        <button
          onClick={() => setOptions('accessories')}
          className={`shrink-0 border-b-2 px-1 pb-2 text-sm font-archivo ${options === 'accessories' ? 'text-sky-600 border-sky-500' : 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 '}`}
        >
          Accessories
        </button>
      </div>
      <div className='flex flex-row items-center'>
        <button onClick={() => swiperRef.current?.slidePrev()} className="text-black/50 hover:text-white hover:bg-black/60 p-2 rounded-full"><IoChevronBackOutline /></button>
        <button onClick={() => swiperRef.current?.slideNext()} className="text-black/50 hover:text-white hover:bg-black/60 p-2 rounded-full"><IoChevronForwardOutline /></button>
    </div>
</div>
        </div>
        <div>
        <Swiper
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        loop
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        modules={[Autoplay, Navigation, Pagination]}
        onSlideChange={handleIndex}
        onSwiper={(swiper) => console.log(swiper)}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
        {products && products
        .filter(item => item[options])
        .map((item, index) => (
      <SwiperSlide key={index}>
        <a href="#" className="group block">
  <img
    src={item.url}
    alt=""
    className="h-[350px] w-full object-cover sm:h-[350px]"
  />

  <div className="mt-1.5">
    <p className="text-xs font-archivo text-gray-500">Space Grey</p>

    <div className="mt-1.5 flex gap-1">
      <form>
        <fieldset>
          <legend className="sr-only">Color</legend>
        </fieldset>

        <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
          <div>
            <input type="checkbox" id="ColorSg" className="sr-only" />

            <label
              htmlFor="ColorSg"
              className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
            >
              <span className="sr-only"> Space Gray </span>
            </label>
          </div>

          <div>
            <input type="checkbox" id="ColorS" className="sr-only" />

            <label
              htmlFor="ColorS"
              className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
            >
              <span className="sr-only"> Silver </span>
            </label>
          </div>

          <div>
            <input type="checkbox" id="ColorP" className="sr-only" />

            <label
              htmlFor="ColorP"
              className="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
            >
              <span className="sr-only"> Pink </span>
            </label>
          </div>

          <div>
            <input type="checkbox" id="ColorG" className="sr-only" />

            <label
              htmlFor="ColorG"
              className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
            >
              <span className="sr-only"> Pink </span>
            </label>
          </div>

          <div>
            <input type="checkbox" id="ColorSb" className="sr-only" />

            <label
              htmlFor="ColorSb"
              className="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
            >
              <span className="sr-only"> Pink </span>
            </label>
          </div>
        </div>
      </form>
    </div>

    <div className="mt-3 flex justify-between text-sm">
      <h3 className="text-gray-900 font=archivo group-hover:underline group-hover:underline-offset-4">
        {item.title}
      </h3>

      <p className="text-gray-900">${item.price}</p>
    </div>
    <div className="mt-3 flex justify-between mb-4 text-sm">
      <button className='border border-black text-black rounded-lg px-4 py-2 font-archivo hover:bg-black/80 hover:text-white'>Add to Cart</button>
      <button className='bg-black rounded-lg px-4 py-2 font-archivo hover:bg-black/80'>Buy Now</button>
    </div>
  </div>
</a>
      </SwiperSlide>))}

        </Swiper>
        </div>
    </div>
  )
}

export default Bestseller