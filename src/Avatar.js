import React from "react";
import "./Avatar.css";
import "tachyons";
import AvatarList from "./AvatarList";

const Avatar = (props) => {
  const avatarListArray = [
    {
      id: 1,
      name: "Manish",
      work: "Full Stack Developer",
    },
    {
      id: 2,
      name: "Lakshyaa",
      work: "Data Scientist",
    },
    {
      id: 3,
      name: "Bittu",
      work: "Youtuber",
    },
    {
      id: 4,
      name: "Cheeku",
      work: "Decor Enthusiast",
    },
  ];

  const arrayAvatarCard = avatarListArray.map((avatarCard, i) => {
    return (
      <AvatarList
        id={avatarListArray[i].name}
        name={avatarListArray[i].name}
        work={avatarListArray[i].work}
      />
    );
  });

  return (
    <div className="avatar__mainpage">
      <h1>Welcome to Avatar World</h1>
      {arrayAvatarCard}
      <button>Subscribe</button>
    </div>
  );
};

export default Avatar;
