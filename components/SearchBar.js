import Form from "react-bootstrap/Form";

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
      <div style={formStyle}>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Style </Form.Label>
            <Form.Control
              as="select"
              size="sm"
              custom
              onClick={props.handleClicked}
            >
              {props.styles.map((style, id) => (
             <option key={id} value={style}>{style}</option>
          ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default SearchBar;
