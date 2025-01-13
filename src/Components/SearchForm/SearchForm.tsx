import "./SearchForm.scss";

const SearchForm = () => {
  return (
    <div className="searchform">
      This is where the search form will go.
      <input type="text" placeholder="Pokemon name here ..." />
      <select>
        <option value="pokemon1">pokemon1</option>
        <option value="pokemon2">pokemon2</option>
        <option value="pokemon3">pokemon3</option>
      </select>
      <p>This will appear when one of the above options is used</p>
      <select>
        <option value="game1">game1</option>
        <option value="game2">game2</option>
        <option value="game3">game3</option>
      </select>
    </div>
  );
};

export default SearchForm;
