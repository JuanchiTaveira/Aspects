import "./App.css";
import { Main } from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import { OverlayProvider as SearchOverlayProvider } from "./context/SearchOverlayContext";
import "./styles/main.scss";

function App() {
  return (
    <>
      <div className="App">
        <SearchOverlayProvider>
          <NavBar />
          <Main />
        </SearchOverlayProvider>
      </div>
    </>
  )
}

export default App;
