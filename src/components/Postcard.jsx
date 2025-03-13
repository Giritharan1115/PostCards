import React, { useEffect, useState } from "react";
import axios from "axios";
import PostcardItem from "./PostcardItem";

const Postcard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center" style={{ color: "#F4FFC3" }}>
        Posts
      </h1>
      <div className="row">
        {data.map((post) => (
          <PostcardItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Postcard;
