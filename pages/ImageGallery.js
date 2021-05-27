import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar.jsx';
import React, { useReducer, useState } from 'react';
import { withApollo } from '../libs/Apollo';
import SearchResultsContainer from '../components/SearchResultsContainer';
import StylesContainer from '../components/StylesContainer';

const ImageGallery = (props) => {
  const [tattooStyles, setTattooStyle] = React.useState();
  const [searchRes, setSearchRes] = React.useState();
  const [view, setView] = React.useState();

  return (
    <Layout>
      <div className="Image-Gallery-Container">
        <h1 id="image-gallery">Image Gallery</h1>
        <SearchBar
          setSearchRes={setSearchRes}
          setView={setView}
          setTattooStyle={setTattooStyle}
          className="SearchBar-Container"
        ></SearchBar>
        <div className="Card-Container">
          {view === 'SearchResultsContainer' ? (
            <SearchResultsContainer
              searchRes={searchRes}
            ></SearchResultsContainer>
          ) : (
            <StylesContainer tattooStyles={tattooStyles}></StylesContainer>
          )}
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
