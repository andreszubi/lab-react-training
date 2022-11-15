import React from "react";

function Rating({children}) {
  const roundedRating = Math.round(children);
  const stars = "★".repeat(roundedRating) + "☆".repeat(5 - roundedRating);
  return (
    <div>
      <p>{stars}</p>
    </div>
  );
}

export default Rating;