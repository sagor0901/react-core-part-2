import "./App.css";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Batsman from "./Batsman";
import Users from "./User";
import { Suspense } from "react";
import Friends from "./Friends";
import NewUser from "./NewUser";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const newUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

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
      <Suspense>
        <NewUser newUser={newUser}></NewUser>
      </Suspense>
      <Suspense>
        <Friends fetchUser={fetchUser}></Friends>
      </Suspense>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense> */}
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
