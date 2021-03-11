import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
const { RESTDataSource } = require('apollo-datasource-rest');
import React, { useReducer, useState } from 'react';
import { ApolloClient } from 'apollo-boost';
import { withApollo } from '../libs/Apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';

// const GET_CARD_BY_STYLE = gql`
//   {
//     searched_PB_By_Style(style: "tattoos") {
//       id
//       tags
//       largeImageURL
//       likes
//       user
//     }
//   }
// `;
//////////////////////////////TESTING
const TEST_CARD_SEARCH = gql`
  query Query($search: String) {
    searched_PB_By_Style(style: $search) {
      id
      tags
      largeImageURL
      likes
      user
    }
  }
`;
//////////////////////////////TESTING

const ImageGallery = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log('IMAGE_GALLERY', data);
    setTattooStyle(data);
  };
  const [tattooStyle, setTattooStyle] = React.useState();
  function getTattooStyle(e) {
    // setTattooStyle(e);
    onSubmit(e.style);
  }

  const { loading, error, data } = useQuery(TEST_CARD_SEARCH, {
    variables: { search: `${tattooStyle}` },
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log('Testing Tattoo Style', `tattoo ${tattooStyle}`);
  var userData = data.searched_PB_By_Style;
  console.log(userData);
  return (
    <Layout>
      <div className="Image-Gallery-Container">
        <h1 id="image-gallery">Image Gallery</h1>
        <SearchBar
          value={tattooStyle}
          onChange={getTattooStyle}
          setTattooStyle={setTattooStyle}
          onSubmit={handleSubmit(onSubmit)}
          className="SearchBar-Container"
        ></SearchBar>
        <div className="Card-Container">
          {userData.map((user, id) => (
            <Cards
              userName={user.user}
              likes={user.likes}
              key={id}
              pic={user.largeImageURL}
            ></Cards>
          ))}
        </div>
      </div>
      <style jsx>{`
        .Image-Gallery-Container {
          background-color: white;
          color: black;
        }
        #image-gallery {
          font-size: 350%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        .SearchBar-Container {
          background-color: white;
        }
        .Card-Container {
          display: flex;
          flex-wrap: wrap;
          margin: 43px;
        }
      `}</style>
    </Layout>
  );
};
export default withApollo(ImageGallery);
