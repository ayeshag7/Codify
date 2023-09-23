import FeaturedBlogCard from './FeaturedBlogCard';

const FeaturedBlogs = ({ blogs }) => {

  let featuredBlogs = [];

  for (let i=0; i<3; i++) {
    featuredBlogs.push(blogs[i])
  }

  return (
    <div className="relative flex flex-col gap-y-8 h-96 w-72 px-4 pt-12 bg-white dark:bg-darkGrey shadow-lg rounded-xl border dark:border-gray-600 border-gray-400">

        <div className="absolute flex justify-center items-center w-48 h-10 bg-white rounded-3xl border border-gray-400"
        style={{"top": "-20px", "boxShadow": "2px 2px 0 #9505E3"}}>
          <p className="text-base font-extrabold text-boldGrey">Featured Articles</p>
        </div>

        {featuredBlogs.map((blog, index) => {
            return <FeaturedBlogCard key={index} blog={blog} count={index+1} />
          })}

    </div>
  )
}

export default FeaturedBlogs;
