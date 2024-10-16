import "./App.css";
// import Todo from "./Todo";
import Actor from "./Actor";

function App() {
  const actor = ["Sakib", "Shoriful Raj", "Jasim", "Ruble", "Salman Sha"];

  const singers = [
    { name: "Dr. Mafuzur Rahaman", age: 68 },
    { name: "Eva Rahaman", age: 38 },
    { name: "Shuvro Dev", age: 58 },
    { name: "Pritom", age: 28 },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <Actor name={"Bappa Raz"}></Actor>
      {actor.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core Concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      <Mori></Mori>
      <Device name="Laptop" price="55000"></Device>
      <Device name="Mobile" price="17000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer>
      <Developer2></Developer2> */}
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
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade} </p>
      <p>Score: {score} </p>
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
function Developer2() {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px Solid purple",
        borderRadius: "10px",
      }}
    >
      <h5>Object Model Design Devo</h5>
      <p>Coding:</p>
    </div>
  );
}
function Device(props) {
  // console.log(props);
  return (
    <h2>
      This Device: {props.name} price: {props.price}
    </h2>
  );
}

export default App;
