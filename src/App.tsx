import "./App.css";
import { Main } from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import "./styles/main.scss";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Main />
      </div>
    </>
  )
}

export default App;
