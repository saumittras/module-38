import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Mori></Mori>
      <Device name="Laptop"></Device>
      <Device></Device>
      <Device></Device>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
    </>
  );
}

function Mori() {
  return <h2>Mori I love You. This is my first React Code</h2>;
}

function Person() {
  const money = 100000000;
  const person = { name: "Saumittra", age: 31 };
  return (
    <h3>
      Hi I am {person.name} with ccc age {person.age}. I have huge amount of
      money. i have {money} taka. I am looking for spend money{" "}
    </h3>
  );
}
function Student() {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  );
}
function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px Solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding:</p>
    </div>
  );
}
function Device(props) {
  console.log(props);
  return <h2>This Device: Laptop</h2>;
}

export default App;
