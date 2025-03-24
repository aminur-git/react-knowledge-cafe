import PropTypes from "prop-types"; // ES6
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleBookMark, handleReadTime }) => {
  const { id, title, cover_picture, author, author_image, reading_time, posted_date, hashtags } = blog;

  return (
    <div className="mb-14 rounded-md p-4 shadow-sm ">
      <img className="w-full rounded-sm mb-8" src= {cover_picture} alt="" />     
      <div className="flex justify-between">
        <div className="flex">
            <img className=" h-14 w-14  rounded-[50%]" src={author_image} alt="" />
            <div className="ml-6 mb-4">
              <h3 className="text-2xl font-bold">{author}</h3>
              <p className="text-base text-[#11111199]">{posted_date}</p>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-3">
            <span className="text-gray-500">{reading_time} Minute read.</span>
            <button className="cursor-pointer" onClick={()=>handleBookMark(blog)}><IoBookmarksOutline  className="text-gray-500 font-bold hover:text-xl"/></button> 
            </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold pb-4">Title : {title}</h1>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx} className="ml-2 text-base text-[#11111199]"><a href="">{hash}</a></span> )
        }
      </p>   
      <button onClick={()=> handleReadTime({id, reading_time})} className=" text-blue-600 underline font-bold pt-4 cursor-pointer hover:text-blue-800">Mark As Read</button>
      <hr className="mt-4 border-1 border-gray-100"/>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func
};

export default Blog;
