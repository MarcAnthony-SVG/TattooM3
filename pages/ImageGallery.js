import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import React, { useReducer, useState } from 'react';
import { withApollo } from '../libs/Apollo';
import { gql, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
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
  if (error) return `Error! ${error.message}`;
  if (loading) return 'Loading...';
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
