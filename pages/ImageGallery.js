import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import InstaPhoto from '../components/InstaPhoto';
import { gql } from '@apollo/client';
const { RESTDataSource } = require('apollo-datasource-rest');
import React from 'react';
import { ApolloClient } from 'apollo-boost';
const MainContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '43px',
};
const query = gql`{
    query searchedImage(query: "tattoo") {
      id
      tags
      largeImageURL
      likes
      user
    }
  }
`;
console.log("ImageGallery Query",query)

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      userNames: [
        'gburgis0',
        'fertel1',
        'mveart2',
        'rduke3',
        'scolliard4',
        'crubinsaft5',
        'mfinnigan6',
        'raslin7',
        'jwinfred8',
        'thinksen9',
        'mmcgreaya',
        'tthreadkellb',
        'dbrisseauc',
        'jturfind',
        'crubinove',
        'dornizf',
        'jgobatg',
        'lwestmacotth',
        'pwaddiei',
        'erubinchikj',
      ],
      styles: [
        'Traditional',
        'Realism',
        'Watercolor',
        'Tribal',
        'New School',
        'Neo Traditional',
        'Japanese',
        'Illustrative',
        'Chicano',
        'Abstract',
        'Trash Polka',
        'Blackwork',
        'Greywash',
        'Negative Space',
        'Silhouette',
        'Brushstroke',
        'Dotwork',
        'Pointillism',
        'Geometric',
        'Polygon',
        'Ornamental',
        'Glitch',
        'Graffiti',
      ],
      location: '',
      artist: '',
      value: '',
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
        {console.log()}
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
