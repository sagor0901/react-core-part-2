import "./App.css";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Batsman from "./Batsman";

function App() {
  function handleClick() {
    alert("i am clicked");
  }

  const handleClick3 = () => {
    alert("click 3");
  };
  const handleClick4 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>

      <Counter2></Counter2>

      <Counter></Counter>
      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        // bad practice
        onClick={function handleClick2() {
          alert("click 2");
        }}
      >
        Click Me2
      </button>
      <button onClick={handleClick3}>click3</button>
      <button onClick={() => handleClick4(5)}>click4</button>
    </>
  );
}

export default App;
