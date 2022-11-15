import React from "react";
import { useState } from "react";

function ClickablePicture({img, imgClicked}) {
  const [image, setImage] = useState(img);
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked);
    setImage(clicked ? img : imgClicked);
  };
  
  
  return (
    <div>
      <img src={image} alt="ClickablePicture" onClick={handleClick} />
    </div>
  );
}

export default ClickablePicture;