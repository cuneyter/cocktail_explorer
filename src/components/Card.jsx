import React from "react";

const Card = ({ name, src }) => {
  const truncatedName = name.length > 22 ? `${name.slice(0, 22)}...` : name;

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="cocktails"
        src={`${src}`}
        style={{ width: "300px", height: "400px" }}
      />
      <div>
        <h2>{truncatedName}</h2>
      </div>
    </div>
  );
};

export default Card;
