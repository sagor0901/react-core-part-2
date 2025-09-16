import { use } from "react";

export default function Friends({ fetchUser }) {
  const user = use(fetchUser);
  console.log(user);

  return (
    <div>
      <h3>Friends</h3>
    </div>
  );
}
