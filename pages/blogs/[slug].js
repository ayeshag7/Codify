import React from 'react';
import db from '../../firebase';
import { collection, getDoc, getDocs, doc } from 'firebase/firestore';
import BlogPage from '../../components/BlogPage';
import Header from "../../components/Header";
import MiniFooter from '../../components/MiniFooter';

const Post = ({  data }) => {

    const blog = data[0];
    const color = data[1];

  return (
      <>
        <div className="bg-backgroundGreen p-0 md:p-4" style={{
        "maxWidth": "1980px",
        "margin": "auto",
        "minHeight": "680px"
      }}>

        <Header/>

        <BlogPage blog={blog} color={color}/>

      </div>
      <MiniFooter />
      </>
  )
}

export default Post;


export async function getStaticPaths() {
    const collectionRef = collection(db, "blogs");
    const querySnapshot = await getDocs(collectionRef);

    const paths = querySnapshot.docs.map((doc) => ({
        params: { slug: doc.id },
      }));

    return {
        paths,
        fallback: true
    }
};


export async function getStaticProps(context) {

    const parts = context.params.slug.split("@");
    const docId = parts[0];
    const color = parts[1];
    const documentReference = doc(db, "blogs", docId);
    const docSnap = await getDoc(documentReference);

    const blog = docSnap.data();

    const timeStamp = blog["datePosted"];
    blog["datePosted"] = timeStamp.toDate().toLocaleString();

    const data = [blog, color]

    return {
        props: { data }
    }
};
