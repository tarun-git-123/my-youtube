import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
const lists = ["All", "Gaming", "News", "Music", "History","Cricket","Football","Education"];
const ButtonList = () => {
  return (
    <div>
      <div className="flex bg-white fixed w-full z-10">
        {lists.map((list) => {
          return <Button name={list} key={list} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
