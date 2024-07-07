import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "./styles/main.scss";

function App() {
  return (
    <>
      <div className="App">
        <NavBar title="Aspects" navItems={["SEARCH", "ACCOUNT", "MY BAG (0)"]}/>
      </div>
    </>
  )
}

export default App;
