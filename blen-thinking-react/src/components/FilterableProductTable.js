import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
const FilterableProductTable = ({ products, searchFunc, onStock }) => {
  return (
    <div>
      <h1>Pensando en React cinta blanca 👍</h1>
      <div>
        <SearchBar searchFunction={searchFunc} onStock={onStock} />
      </div>
      <div>
        <ProductTable products={products} />
      </div>
    </div>
  );
};

export default FilterableProductTable;
