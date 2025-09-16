import { use } from "react";

export default function Users({ fetchUser }) {
  const styloFor = {
    border: "red solid 3px",
    borderRadius: "5px",
    padding: "20px",
  };
  const user = use(fetchUser);
  console.log(user);

  return (
    <div style={styloFor}>
      <h3>Users: </h3>
    </div>
  );
}
