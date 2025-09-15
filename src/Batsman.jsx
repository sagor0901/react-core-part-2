import { useDebugValue, useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const handleSingles = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };
  const handleFour = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);
  };
  const handleSix = () => {
    const updateRuns = runs + 6;
    const updateSixes = sixes + 1;
    setSixes(updateSixes);
    setRuns(updateRuns);
  };
  return (
    <div>
      <h3>Player: Bangladeshi</h3>
      {runs > 50 && <p>Your score 50 </p>}
      <p>total six: {sixes}</p>
      <p>Score: {runs} </p>
      <button onClick={handleSingles}>signles</button>
      <button onClick={handleFour}>four</button>
      <button onClick={handleSix}>six</button>
    </div>
  );
}
