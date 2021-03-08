import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
const { RESTDataSource } = require('apollo-datasource-rest');
import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { withApollo } from '../libs/Apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
const MainContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '43px',
};
const GET_CARD_BY_STYLE = gql`
  {
    searched_PB_By_Style(style: "traditional tattoos") {
      id
      tags
      largeImageURL
      likes
      user
    }
  }
`;
const ImageGallery = () => {
  // constructor(props) {
  // super(props);
  // this.state = {
  // };
  // this.handleChange = this.handleChange.bind(this);
  // this.handleClicked = this.handleClicked.bind(this);
  // }
  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  //   console.log(this.state.value);
  // }
  // handleClicked(event) {
  //   this.setState({ value: event.target.value });
  //   console.log(this.state.value);
  // }
  // onChangeColor(event) {
  //   console.log(event.target.value);
  // }
  const { loading, error, data } = useQuery(GET_CARD_BY_STYLE);
  if (error) return `Error! ${error.message}`;
  if (loading) return 'Loading...';
  var userData = data.searched_PB_By_Style;
  return (
    <Layout>
      <h1 id="ImageGallery">Image Gallery</h1>
      <SearchBar
      ></SearchBar>
      <div className="MainContainer" style={MainContainer}>
        {userData.map((user, id) => (
          <Cards userName={user.user} likes={user.likes} key={id}></Cards>
        ))}
      </div>
    </Layout>
  );
};
// }
export default withApollo(ImageGallery);
