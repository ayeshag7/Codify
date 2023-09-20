import BlogPage from '../../components/BlogPage';
import Header from "../../components/Header";
import MiniFooter from '../../components/MiniFooter';
import db from '../../firebase';
import { getDoc, doc } from 'firebase/firestore';


const Post = ({  data }) => {

    const blog = data[0];
    const color = data[1];

  return (
      <>
        <div className="bg-backgroundGreen m-0 md:m-auto p-0 md:pt-4" style={{
        "maxWidth": "1980px",
        "minHeight": "680px"
      }}>

        <Header/>

        <BlogPage blog={blog} color={color}/>

        <MiniFooter />

      </div>

      </>
  )
}

export default Post;


export async function getServerSideProps(context) {

    const parts = context.params.slug.split("@");
    const docId = parts[0];
    const color = parts[1] || "bc6B";
    
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
