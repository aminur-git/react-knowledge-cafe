import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookMark, handleReadTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 pt-4">
      <h1 className="text-4xl"></h1>
      {blogs.map((blog, idx) => (
        <Blog key={idx} blog={blog} handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blog>
      ))}
    </div>
  );
};

export default Blogs;

Blog.propTypes={
  handleBookMark: PropTypes.func
}