import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Mori></Mori>
      <Person></Person>
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

export default App;
