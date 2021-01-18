const SearchBar = ({ searchFunction, onStock }) => {
  return (
    <div>
      <form action="">
        <input onChange={searchFunction} type="text" name="" id="" />
      </form>
      <div>
        <label htmlFor="">
          <input type="checkbox" onChange={onStock} />
          Solo muestra los productos en stock
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
