import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { CiRead, CiUnread } from "react-icons/ci";

const PostcardItem = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 border-0 shadow-sm d-flex flex-column">
        <div
          className="card-body d-flex flex-column"
          style={{ backgroundColor: "#5D8736" }}
        >
          <h3 style={{ color: "#F4FFC3" }}>User ID: {post.userId}</h3>
          <h5 className="card-title" style={{ color: "#A9C46C" }}>
            {post.title}
          </h5>
          <div className="flex-grow-1 overflow-hidden">
            <p
              className="card-text"
              style={{
                color: "#F4FFC3",
                display: "-webkit-box",
                WebkitLineClamp: expanded ? "unset" : 3,
                WebkitBoxOrient: "vertical",
                overflow: expanded ? "visible" : "hidden",
              }}
            >
              {post.body}
            </p>
          </div>
          <div
            className="d-flex justify-content-end align-items-center"
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <CiRead size={20} className="text-light" />
            ) : (
              <CiUnread size={20} className="text-dark" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostcardItem;
