import Slug from './Slug';
import db from '../../../firebase';
import { getDoc, doc } from 'firebase/firestore';


async function fetchBlogFromFirestore(params) {
    const docId = params.slug;
    
    const documentReference = doc(db, "blogs", docId);
    const docSnap = await getDoc(documentReference);

    const blog = docSnap.data();

    const timeStamp = blog["datePosted"];
    blog["datePosted"] = timeStamp.toDate().toLocaleString();

    return blog
};

export default async function Page({params}) {
    const blog = await fetchBlogFromFirestore(params);
    return <Slug blog={blog} />
};
