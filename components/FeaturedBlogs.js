import React from 'react';
import FeaturedBlogCard from './FeaturedBlogCard';

const FeaturedBlogs = ({ blogs }) => {
  
  const colors = ["bg-bc1P", "bg-bc2G", "bg-bc3L"];

  let featuredBlogs = [];

  for (let i=0; i<3; i++) {
    featuredBlogs.push(blogs[i])
  }

  return (
    <div className="relative flex flex-col gap-y-8 h-96 w-72 px-4 pt-12 bg-backgroundSkin rounded-xl border border-black">

        <div className="absolute flex justify-center items-center w-48 h-10 bg-white rounded-3xl border border-black"
        style={{"top": "-20px"}}>
          <p className="text-base font-extrabold text-boldGrey">Featured Articles</p>
        </div>

        {featuredBlogs.map((blog, index) => {
            return <FeaturedBlogCard key={index} blog={blog} count={index+1} color={colors[index]}/>
          })}

    </div>
  )
}

export default FeaturedBlogs;
