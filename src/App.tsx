import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductFilter from "./components/ProductFilter/ProductFilter";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import { products } from "./mock/mockData";
import "./styles/main.scss";

function App() {
  return (
    <>
      <div className="App">
        <NavBar title="Aspects" navItems={["SEARCH", "ACCOUNT"]} />
        <ProductFilter />
        <main className="px-4 py-8">
          <ProductsContainer products={products} />
        </main>
      </div>
    </>
  )
}

export default App;
