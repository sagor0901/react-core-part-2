import { useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    // console.log("add2 clicked");
    const newCount = count + 1;
    setCount(newCount);
  };
  const styleCount2 = {
    border: "red 2px solid",
  };
  return (
    <div style={styleCount2}>
      <h3>count:{count} </h3>
      <button onClick={handleAdd}>Add2</button>
    </div>
  );
}
