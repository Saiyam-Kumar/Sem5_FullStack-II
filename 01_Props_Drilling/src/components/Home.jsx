const Home = (props) => {

  return (
    <div>
      <h1>Home Component</h1>
      <h2>Name: {props.name}</h2>
      <h2>UID: {props.uid}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Department: {props.dept}</h2>
    </div>
  );
};

export default Home;