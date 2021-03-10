import Form from './Form';
import { withApollo } from '../libs/Apollo';
import React from 'react';

const inputStyle = {
  width: 'auto',
  //   overflow: 'hidden'//   overflow: 'auto'
};
const SearchBar = (props) => {
  // const { value: artist, bind: bindartist, reset: resetartist } = useInput('');
  // const handleSubmit = (evt) => {
  //   // evt.preventDefault();
  //   alert(`Searching for ${artist}`);
  //   resetartist();
  // };
  const [tattooStyles] = React.useState([
    { value: 'Traditional', label: 'Traditional' },
    { value: 'Realism ', label: 'Realism' },
    { value: 'Watercolor', label: 'Watercolor' },
    { value: ' Tribal', label: 'Tribal' },
    { value: 'New School ', label: 'New School' },
    { value: ' Neo Traditional', label: 'Neo Traditional' },
    { value: 'Japanese ', label: 'Japanese' },
    { value: ' Illustrative', label: 'Illustrative' },
    { value: ' Chicano', label: 'Chicano' },
    { value: 'Abstract ', label: 'Abstract' },
    { value: 'Trash Polka ', label: 'Trash Polka' },
    { value: 'Blackwork', label: 'Blackwork' },
    { value: ' Greywash', label: 'Greywash' },
    { value: ' Negative Space', label: 'Negative Space' },
    { value: 'Silhouette ', label: 'Silhouette' },
    { value: 'Brushstroke ', label: 'Brushstroke' },
    { value: ' Dotwork', label: 'Dotwork' },
    { value: ' Pointillism', label: 'Pointillism' },
    { value: ' Geometric', label: 'Geometric' },
    { value: 'Polygon ', label: 'Polygon' },
    { value: ' Ornamental', label: 'Ornamental' },
    { value: 'Glitch ', label: 'Glitch' },
    { value: 'Graffiti ', label: 'Graffiti' },
  ]);
  console.log(props);
  return (
    <div className="search-container">
      {/* <div style={formStyle} onSubmit={handleSubmit}>
        <form>
          <label>
            Location:
            <input
              style={inputStyle}
              type="text"
              {...bind}
              value={Submit}
              onChange={props.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div> */}
      {/* <div className="form-style">
        <form>
          <label>
            Artist:
            <input style={inputStyle} type="text" {...bindartist} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div> */}
      <div className="form-style">
        <Form
          value={props.tattooStyle}
          setTattooStyle={props.setTattooStyle}
          onSubmit={props.onSubmit}
        ></Form>
      </div>
      <style jsx>{`
        .search-container {
          display: flex;
          border: solid 1px black;
          position: relative;
          left: 2%;
          width: 90%;
          height: 40px;
        }
        .form-style {
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default withApollo(SearchBar);
