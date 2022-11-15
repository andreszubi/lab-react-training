import React from "react";
import { useState } from "react";

function Dice() {
  const [image, setImage] = useState("/src/assets/images/dice3.png");
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked);
    setImage(clicked ? "/src/assets/images/dice-empty.png" : "/src/assets/images/dice3.png");
  };
  
  
  return (
    <div>
      <img src={image} alt="Dice" onClick={handleClick} />
     </div>
    );
    }

    export default Dice;