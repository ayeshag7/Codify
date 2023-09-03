import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog, color }) => {

  const {title, subtitle, datePosted, duration, imageURL, id} = blog;

  return (
    <div className={`w-72 h-sh lg:w-lw lg:h-lh flex flex-col gap-y-4 items-center p-7 lg:flex-row lg:gap-x-8 lg:p-8 ${color} border border-black rounded-2xl`}>

        {/* Image Div */}
      <Link href={`/blogs/${id}@${color}`}>
        <div className="w-siw h-sih lg:h-lih lg:w-liw bg-white border border-black rounded-xl hover:scale-105 transform transition-transform duration-400 ease-out"
        onMouseOver={(e) => {
          e.target.style.boxShadow = '6px 6px 0 #333333'; 
        }}
        onMouseOut={(e) => {
          e.target.style.boxShadow = 'none';
        }}>

          <Image
            src={imageURL}
            alt="blog preview"
            width={560}
            height={560}
            className="w-full h-full object-cover rounded-xl"
            />
        </div>
      </Link>
      
      {/* Text Div */}
      <div className="flex flex-col gap-y-3 lg:gap-y-4">
        
        {/* Date and Duration */}
        <div className="flex gap-x-4 lg:gap-x-8">
          <p className="text-xs lg:text-sm text-boldGrey">{datePosted}</p>
          <div className="flex justify-start items-center gap-x-3">
            <div className="h-2 w-2 bg-popUpPink rounded-full"></div>
            <p className="text-xs lg:text-sm text-boldGrey">{duration}</p>
          </div>
        </div>
        
        {/* Title */}
        <Link href={`/blogs/${id}@${color}`}>
          <p className="font-extrabold text-base w-56 lg:text-2xl lg:w-96 text-boldGrey hover:underline">{title}</p>
        </Link>

        {/* Subtitle */}
        <p className="text-xs leading-6 mb-2 lg:m-0 lg:text-sm text-boldGrey lg:leading-7">
        {subtitle}
        </p>

        {/* continue reading and image */}
        <div className="flex justify-between items-center mb-4 lg:mb-0">
          <button className="w-36 h-8 lg:w-44 lg:h-10 lg:px-2 bg-white rounded-full hover:scale-105 transform transition-transform duration-400 ease-out text-xs lg:text-sm text-boldGrey font-extrabold"
          onMouseOver={(e) => {
              e.target.style.boxShadow = 'none'; 
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = '3px 3px 0 #333333';
            }}>
          Continue Reading</button>

          <div className="h-8 w-8 lg:h-12 lg:w-12 bg-white border border-black rounded-full">
            <Image
            src="/creator.png"
            alt="create founder"
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

      </div>

    </div>
  )
}

export default BlogCard;