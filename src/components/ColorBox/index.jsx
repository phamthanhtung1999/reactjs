import React, { useState } from "react";
// import PropTypes from "prop-types";

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState("black");
  return (
    <div>
      {color}

      <button onClick={() => setColor("White")}>setWhite</button>
      <button onClick={() => setColor("black")}>setBlack</button>
    </div>
  );
}

export default ColorBox;
