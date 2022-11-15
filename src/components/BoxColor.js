import React from "react";

function BoxColor({r, g, b}) {
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    return (
        <div style={{backgroundColor: rgbColor}}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor;