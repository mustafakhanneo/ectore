import React from 'react'

type BannerItem = {
  url: string;
  title: string;
  description: string;
}

type BannerProps = {
  banner: BannerItem[];
}

const Banner = ({banner}: BannerProps) => {
  return (
    <div className=''>
    <div className='flex flex-row'>
    {banner.map((item, index) => (
      <div key={index}>
        <img src={item.url}/>
      </div>
    ))}
  </div>
  <div>
    <button>
     prev
    </button>
    <button>
    next
    </button>
  </div>
  </div>
  )
}

export default Banner