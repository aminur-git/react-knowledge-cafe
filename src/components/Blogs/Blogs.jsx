import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookMark}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3 pt-4">
      <h1 className="text-4xl"></h1>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark} ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
