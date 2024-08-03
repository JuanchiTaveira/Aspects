import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import { OverlayProvider as SearchOverlayProvider } from "./context/SearchOverlayContext";
import "./styles/main.scss";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchOverlayProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} /> {/* TODO: change redirection to Home when developed */}
            <Route path="/shop" element={<Main />} />
            <Route path="/shop/collections/:category" element={<Main />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </SearchOverlayProvider>
      </div>
    </Router>
  );
}

export default App;