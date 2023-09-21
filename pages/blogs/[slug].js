import BlogPage from '../../components/BlogPage';
import BlogPageHeader from '../../components/BlogPageHeader';
import MiniFooter from '../../components/MiniFooter';
import db from '../../firebase';
import { getDoc, doc } from 'firebase/firestore';


const Post = ({  data }) => {

    const blog = data[0];

  return (
      <>
        <div className="bg-backgroundGreen m-0 p-0" style={{
        "maxWidth": "1980px",
        "minHeight": "680px"
      }}>

        <BlogPageHeader />

        <BlogPage blog={blog} />

        <MiniFooter />

      </div>

      </>
  )
}

export default Post;


export async function getServerSideProps(context) {
    const docId = context.params.slug;
    
    const documentReference = doc(db, "blogs", docId);
    const docSnap = await getDoc(documentReference);

    const blog = docSnap.data();

    const timeStamp = blog["datePosted"];
    blog["datePosted"] = timeStamp.toDate().toLocaleString();

    const data = [blog]

    return {
        props: { data }
    }
};
