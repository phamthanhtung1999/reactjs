import React, { useEffect, useState, useRef } from "react";

function randomColor(currentColor) {
  const Color_list = ["red", "blue", "green", "gray", "black", "yellow"];
  // random
  const currentIndex = Color_list.indexOf(currentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 6);
  }

  return Color_list[newIndex];
}
function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  //  change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
