import Grandfather from "./components/grandfather";

function App() {
  const name = "Saiyam Kumar";
  const uid = "24BCS10108";
  const age = 20;
  const dept = "Computer Science & Engineering";

  return (
    <Grandfather
      name={name}
      uid={uid}
      age={age}
      dept={dept}
    />
  );
}

export default App;