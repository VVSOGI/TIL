import "./App.css";
import Hello from "./components/Hello";
import Timer from "./components/Timer";

const user = {
  // name: "Hwasan",
  age: 1000,
};

function App() {
  return (
    <div className="App">
      {/* <Hello user={user} /> */}
      <Timer />
    </div>
  );
}

export default App;
