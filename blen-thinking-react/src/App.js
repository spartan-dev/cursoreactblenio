import "./App.css";
import { useState, useEffect } from "react";
import products from "./data.json";
import FilterTable from "./components/FilterableProductTable";
function App() {
  const [prods, setProducts] = useState();
  const [filtered, setFiltered] = useState();
  const [previousSearch, setPreviousSearch] = useState([]);
  const [stocked, setStocked] = useState(false);
  useEffect(() => {
    setProducts(products.data);
    setFiltered(products.data);
  }, []);
  const handleSearch = (e) => {
    let searchValue = e.target.value;
    let filter = prods.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFiltered(filter);
  };
  const handleCheckBox = (e) => {
    //let products = state.products;
    // let previousSearch = state.previousSearch;
    let showStocked = setStocked(e.target.checked);

    if (stocked) {
      let stockedFiltered = prods.filter((product) => product.stocked === true);
      setFiltered(stockedFiltered);
      setPreviousSearch(previousSearch);
      setStocked(showStocked);
    } else {
      let filtered = previousSearch;
      setFiltered(filtered);
      setStocked(e.target.checked);
    }
  };

  return (
    <div className="App">
      <FilterTable
        products={filtered}
        searchFunc={handleSearch}
        onStock={handleCheckBox}
      />
    </div>
  );
}

export default App;
