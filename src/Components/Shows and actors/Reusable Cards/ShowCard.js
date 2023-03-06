import React from "react";
import { Link } from "react-router-dom";


const ShowCard = ({ name, image, id, summary,onClick }) => {

  const modSummary = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")
    : "No description";
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{modSummary}</p>
      <div>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick={()=>{onClick(id)}}>
          Star me
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
