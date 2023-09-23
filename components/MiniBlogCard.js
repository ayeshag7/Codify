import Image from 'next/image';
import Link from 'next/link';

const MiniBlogCard = ({blog, count, color}) => {

  const {title, imageURL, id} = blog;

  return (
    <div className="flex justify-start gap-x-3 md:gap-x-4">

        <Link href={`/blogs/${id}`}>
          <div id="image-container" className="relative h-16 w-16 md:h-20 md:w-20 bg-white hover:scale-105 transform transition-transform duration-400 ease-out border border-black rounded-xl"
          onMouseOver={(e) => {
            e.target.style.boxShadow = '3px 3px 0 #333333'; 
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

              <div id="tag-circle" className="absolute bottom-12 right-12 md:bottom-16 md:right-16 flex justify-center items-center h-6 w-6 md:w-7 md:h-7 rounded-full bg-white border border-black">
                      <p className="text-boldGrey text-base font-bold">{count}</p>
              </div>
          </div>
        </Link>

        <div>
            <Link href={`/blogs/${id}`}>
              <p className="text-sm md:text-base font-bold hover:underline text-boldGrey dark:text-offWhite w-44 md:w-64 mb-2">
                {title}
              </p>
            </Link>
            <p className="text-xs">Sep 3, 2022</p>
        </div>

    </div>
  )
}

export default MiniBlogCard;
