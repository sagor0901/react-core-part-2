import { use } from "react";
import SingleUser from "./SingleUser";

export default function NewUser({ newUser }) {
  const newUsers = use(newUser);
  console.log(newUsers);

  return (
    <div>
      <h1>im new user</h1>
      {newUsers.map((user) => (
        <SingleUser key={user.id} user={user}></SingleUser>
      ))}
    </div>
  );
}
