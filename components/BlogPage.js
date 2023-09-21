import React from 'react';
import Image from "next/image";

const BlogPage = ({blog}) => {

  const {title, author, datePosted, duration, content, imageURL} = blog;

  const markup = { __html: content };

  return (
    <div className="flex flex-col items-center px-6 py-16 mx-auto md:mt-0 md:mb-12 min-h-screen md:max-w-6xl bg-white md:rounded-xl">

        <div className="w-72 h-52 md:w-lgW md:h-lgH border border-gray-600 rounded-xl mb-12">
          <Image
          src={imageURL}
          alt="blog preview"
          width={560}
          height={560}
          className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* title */}
        <p className="text-3xl md:text-4xl font-bold text-boldGrey text-center">{title}</p>

        {/* author's name, date published, duration */}
        <div className="flex flex-col gap-y-2 md:flex-row items-center gap-x-8 my-8 md:my-4">
          {/* Author's Profile Picture and Name */}
          <div className="flex items-center gap-x-2">
            <div className="h-10 w-10 md:h-14 md:w-14 bg-white border border-black rounded-full">
                <Image
                src="/creator.png"
                alt="create founder"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-full"
                />
            </div>
            <p className="text-sm md:text-base font-bold text-boldGrey">{author}</p>
          </div>
          {/* Date and Duration */}
          <div className="flex items-center gap-x-8">
            <p className="text-sm md:text-base text-boldGrey my-4 md:my-8">{datePosted}</p>
            <div className="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
              </svg>
              <p className="text-sm md:text-base text-boldGrey my-4 md:my-8">{duration} min read</p>
            </div>
          </div>
        </div>
        
        {/* content */}
        <p className="text-base text-boldGrey text-left leading-8 md:px-8" dangerouslySetInnerHTML={markup}></p>

    </div>
  )
}

export default BlogPage;

async function fetchDataFromFirestore() {
  const collectionRef = collection(db, "blogs");
  const querySnapshot = await getDocs(collectionRef);

  let blogs = [];

  querySnapshot.forEach((doc) => {
    blogs.push({...doc.data(), id: doc.id})
  });

  blogs.map((doc) => {
    const timeStamp = doc["datePosted"]
    doc["datePosted"] = timeStamp.toDate().toLocaleString();
    return doc
  })

  return blogs;
};


export async function getStaticProps() {
  const data = await fetchDataFromFirestore();
  return {
    props: {
      data,
    },
  };
};
