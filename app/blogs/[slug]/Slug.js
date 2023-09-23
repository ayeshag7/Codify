"use client"

import BlogPage from '../../../components/BlogPage';
import BlogPageHeader from '../../../components/BlogPageHeader';
import MiniFooter from '../../../components/MiniFooter';

const Slug = ({ blog }) => {

  return (
      <>
        <div className="bg-white dark:bg-darkGrey m-0 p-0" style={{
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

export default Slug;
