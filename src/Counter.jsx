import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log("add btn clicked");
  };
  const CounterStyle = {
    border: "2px solid yellow",
  };
  return (
    <div style={CounterStyle}>
      <h3>Count:{count} </h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
