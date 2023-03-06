import React from "react";

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `${country}` : "No country known"}</p>
      {!!birthday && `Born ${birthday}`}
      <p> {deathday ? `Died ${birthday}` : "Alive"}</p>
    </div>
  );
};

export default ActorCard;
