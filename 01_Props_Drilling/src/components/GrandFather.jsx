import Father from "./father";

const Grandfather = (props) => {
  return (
    <div>
      <h1>Grandfather Component</h1>

      <Father
        name={props.name}
        uid={props.uid}
        age={props.age}
        dept={props.dept}
      />
    </div>
  );
};

export default Grandfather;