import "./App.css";
import { Main } from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import { OverlayProvider } from "./context/OverlayContext";
import "./styles/main.scss";

function App() {
  return (
    <>
      <div className="App">
        <OverlayProvider>
          <NavBar />
          <Main />
        </OverlayProvider>
      </div>
    </>
  )
}

export default App;
