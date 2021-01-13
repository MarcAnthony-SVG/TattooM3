import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import InstaPhoto from "../components/InstaPhoto";
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
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <Layout>
        <h1>Image Gallery</h1>
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></SearchBar>
        <div className="MainContainer" style={MainContainer}>
          {this.state.userNames.map((user) => (
            <InstaPhoto user={user}></InstaPhoto>
          ))}
        </div>
      </Layout>
    );
  }
}
export default ImageGallery;
