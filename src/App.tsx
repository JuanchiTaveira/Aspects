import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import { OverlayProvider as SearchOverlayProvider } from "./context/SearchOverlayContext";
import "./styles/main.scss";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { products } from './mock/mockData';
import LogIn from "./components/LogIn/LogIn";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchOverlayProvider>
          <NavBar />
          <Main />
          <Routes>
            <Route path="/shop" element={<Main />} />
            <Route path="/product/:productId" element={<ProductDetail products={products} />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </SearchOverlayProvider>
      </div>
    </Router>
  );
}

export default App;