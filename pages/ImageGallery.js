import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import InstaPhoto from "../components/InstaPhoto";
const { RESTDataSource } = require("apollo-datasource-rest");

import React from "react";
const MainContainer = {
  display: "flex",
  flexWrap: "wrap",
  margin: "43px",
};
class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      userNames: [
        "gburgis0",
        "fertel1",
        "mveart2",
        "rduke3",
        "scolliard4",
        "crubinsaft5",
        "mfinnigan6",
        "raslin7",
        "jwinfred8",
        "thinksen9",
        "mmcgreaya",
        "tthreadkellb",
        "dbrisseauc",
        "jturfind",
        "crubinove",
        "dornizf",
        "jgobatg",
        "lwestmacotth",
        "pwaddiei",
        "erubinchikj",
      ],
      styles: [
        "Traditional",
        "Realism",
        "Watercolor",
        "Tribal",
        "New School",
        "Neo Traditional",
        "Japanese",
        "Illustrative",
        "Chicano",
        "Abstract",
        "Trash Polka",
        "Blackwork",
        "Greywash",
        "Negative Space",
        "Silhouette",
        "Brushstroke",
        "Dotwork",
        "Pointillism",
        "Geometric",
        "Polygon",
        "Ornamental",
        "Glitch",
        "Graffiti",
      ],
      location: "",
      artist:"",
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }
  handleClicked(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  handleSubmit(event) {
    console.log(this.state.value);
    this.setState({ value: event.target.value });
    event.preventDefault();
  }
  onChangeColor(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <Layout>
        <h1 id="ImageGallery">Image Gallery</h1>
        <SearchBar
          styles={this.state.styles}
          handleClicked={this.handleClicked}
        ></SearchBar>
        <div className="MainContainer" style={MainContainer}>
          {this.state.userNames.map((user, id) => (
            <InstaPhoto key={id} user={user}></InstaPhoto>
          ))}
        </div>
      </Layout>
    );
  }
}
export default ImageGallery;
