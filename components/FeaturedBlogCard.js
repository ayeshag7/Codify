import Image from 'next/image';
import Link from 'next/link';

const FeaturedBlogCard = ({blog, count}) => {
  
  const {imageURL, title, id} = blog;

  return (
    <div className="flex justify-start gap-x-2">

          <Link href={`/blogs/${id}`}>
            <div id="image-container" className="relative w-16 h-16 bg-white hover:scale-105 transform transition-transform duration-400 ease-out border border-black rounded-xl"
            onMouseOver={(e) => {
              e.target.style.boxShadow = '3px 3px 0 #9505E3'; 
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = 'none';
            }}>
                <Image
                src={imageURL}
                alt="blog preview"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-xl"
                />

                <div id="tag-circle" className="absolute bottom-12 right-12 flex justify-center items-center h-6 w-6 rounded-full bg-white border border-black">
                        <p className="text-boldGrey text-sm font-bold">{count}</p>
                </div>
            </div>
          </Link>

          <div>
              <Link href={`/blogs/${id}`}>
                <p className="text-sm font-bold hover:underline text-boldGrey w-44 mb-1">
                  {title}
                </p>
              </Link>
              <p className="text-xs">1 Sep, 2023</p>
          </div>

    </div>
  )
}

export default FeaturedBlogCard;
