import React from "react";

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: "300px",
    height: "200px",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px"
  }

  const cardNumber = number.toString().split("").slice(-4).join("");

  return (
    <div style={cardStyle}>
      <p>{type}</p>
      <p>**** **** **** {cardNumber}</p>
      <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
