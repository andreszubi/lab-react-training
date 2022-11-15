import React from "react";

function IdCard({picture, firstName, lastName, gender, height, birth}) {
  const birthInfo = birth.toString().split(" ").slice(0, 4).join(" ");
  
    return (
    <div>
        <img src={picture} alt="picture" />
        <p>First Name: {firstName} </p>
        <p>Last Name: {lastName} </p>
        <p>Gender: {gender} </p>
        <p>Height: {height} </p>
        <p>Birth: {birthInfo} </p>
    </div>
    );
}

export default IdCard;