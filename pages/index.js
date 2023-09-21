import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import CreatorCard from "../components/CreatorCard";
import FollowCard from "../components/FollowCard";
import FeaturedBlogs from "../components/FeaturedBlogs";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home({ data }) {

  const blogs = data;
  
  return (
    <main className="min-h-screen">

      <div className="bg-white p-0 md:pt-4" style={{
        "maxWidth": "1980px",
        "margin": "auto",
        "minHeight": "680px"
      }}>

      <Header/>

      <div className="flex flex-col gap-y-16 ml:flex-row ml:justify-between px-4 ml:px-16 my-20">

        <div className="flex max-md:px-4 md:justify-around flex-wrap gap-x-4 gap-y-8 lg:flex-col lg:gap-y-4">
          {blogs.map((blog, index) => {
            return <BlogCard key={index} blog={blog} />
          })}
        </div>

        <div className="max-md:px-4 flex flex-col gap-y-14">
          <CreatorCard/>
          <FeaturedBlogs blogs={blogs}/>
          <FollowCard/>
        </div>

      </div>
      
      <Footer blogs={blogs}/>

      </div>

    </main>
  )
};


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


export async function getServerSideProps() {
  const data = await fetchDataFromFirestore();
  return {
    props: {
      data,
    },
  };
};
