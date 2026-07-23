import Home from "./home";

const Child = (props) => {

  return (
    <div>
      <h1>Child Component</h1>

      <Home
        name={props.name}
        uid={props.uid}
        age={props.age}
        dept={props.dept}
      />
    </div>
  );
};

export default Child;