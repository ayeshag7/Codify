import HomePage from "./HomePage";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";


async function fetchDocsFromFirestore() {
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
  
    return blogs
};

export default async function Page() {
    const allBlogs = await fetchDocsFromFirestore();
    return <HomePage blogs={allBlogs} />
};
