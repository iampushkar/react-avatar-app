import React from "react";

const AvatarList = (props) => {
  return (
    <div className="avatar__style ma4 bg-light-purple dib pa3 tc grow shadow-4">
      <img
        src={`https://joeschmoe.io/api/v1/${props.name}`}
        alt="Avatar1"
      ></img>
      <h1 className="">{props.name}</h1>
      <p>{props.work}</p>
    </div>
  );
};

export default AvatarList;
