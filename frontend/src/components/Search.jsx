const Search = () => {
  return (
    <form action="#" className="search">
      <div className="input-group">
        <input
          id="search"
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          required
        />
        <label className="visually-hidden" htmlFor="search"></label>
        <button
          className="btn text-white bg-success"
          type="submit"
          aria-label="Search"
        >
          <i className="bi bi-search bg-success"></i>
        </button>
      </div>
    </form>
  );
};
export default Search;
