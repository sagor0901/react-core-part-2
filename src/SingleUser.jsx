export default function SingleUser({ user }) {
  const { name, email } = user;
  //   console.log(user);

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Email: {email} </h3>
    </div>
  );
}
