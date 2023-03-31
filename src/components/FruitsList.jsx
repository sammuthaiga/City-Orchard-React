import React, { useEffect, useState } from "react";

function FruitsList() {
    const [fruits, setFruits] = useState([]);
//   const [items, setItems] = useState([]);

  // Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:3000/fruits")
      .then((r) => r.json())
      .then((fruits) => console.log(fruits));
  }, []);
  return (
    <div className="text-white">Hello there?</div>
  )
}

export default FruitsList