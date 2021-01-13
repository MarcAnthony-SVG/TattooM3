const searchContainer = {
  display: "flex",
  border: "solid 1px",
  position: "relative",
  left: "2%",
  width: "90%",
  height: "40px",
};
const formStyle = {
  margin: "auto",
};
const inputStyle = {
  width: "auto",
//   overflow: 'hidden'//   overflow: 'auto'

};
const SearchBar = (props) => {
  return (
    <div style={searchContainer}>
      <div style={formStyle} onSubmit={props.handleSubmit}>
        <form>
          <label>
            Location:
            <input
              style={inputStyle}
              type="text"
              value={props.value}
              onChange={props.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div style={formStyle} onSubmit={props.handleSubmit}>
        <form>
          <label>
            Artist:
            <input
              style={inputStyle}
              type="text"
              value={props.value}
              onChange={props.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div style={formStyle} onSubmit={props.handleSubmit}>
        <form>
          <label>
            Style:
            <input
              style={inputStyle}
              type="text"
              value={props.value}
              onChange={props.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
