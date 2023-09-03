import React from 'react';
import Image from "next/image";

const BlogPage = ({blog, color}) => {

  const {title, author, datePosted, duration, content, imageURL} = blog;

  return (
    <div className={`flex flex-col items-center px-6 py-16 mx-auto md:my-20 min-h-screen md:max-w-6xl ${color} border border-black md:rounded-xl`}>

        <div className="hidden md:block w-lw h-lh border border-black rounded-xl mb-12">
          <Image
          src={imageURL}
          alt="blog preview"
          width={560}
          height={560}
          className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* title */}
        <p className="text-4xl md:text-5xl font-bold text-boldGrey text-center">{title}</p>

        {/* author's name, date published, duration */}
        <div className="flex items-center gap-x-8 my-4">
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
          <p className="text-sm md:text-base text-boldGrey my-8">{datePosted}</p>
          <p className="text-sm md:text-base text-boldGrey my-8">{duration} min read</p>
        </div>
        
        {/* content */}
        <p className="text-base text-boldGrey text-center leading-8 md:px-8">
          {content}
        </p>

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
