import Child from "./child";

const Father = (props) => {

  return (
    <div>
      <h1>Father Component</h1>

      <Child
        name={props.name}
        uid={props.uid}
        age={props.age}
        dept={props.dept}
      />
    </div>
  );
};

export default Father;