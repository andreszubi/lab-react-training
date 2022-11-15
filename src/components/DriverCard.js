import React from "react";

function DriverCard({name, rating, img, car}) {
  const roundedRating = Math.round(rating);
  const stars = "★".repeat(roundedRating) + "☆".repeat(5 - roundedRating);
  return (
    <div>
      <img src={img} alt="profile-image" />
        <p>{name}</p>
        <p>{stars}</p>
        <p>{car.model} - {car.licensePlate}</p>
    </div>
    );
}

export default DriverCard;