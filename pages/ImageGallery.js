import Layout from '../components/Layout.jsx';
import SearchBar from '../components/SearchBar.jsx';
import React, { useReducer, useState } from 'react';
import { withApollo } from '../libs/Apollo';
import SearchResultsContainer from '../components/SearchResultsContainer';
import StylesContainer from '../components/StylesContainer';

const ImageGallery = () => {
  const [tattooStyles, setTattooStyle] = React.useState();
  const [searchRes, setSearchRes] = React.useState();
  const [view, setView] = React.useState();

  return (
    <Layout>
      <div className="image-gallery-container">
        <h1 id="image-gallery">Image Gallery</h1>
        <SearchBar
          setSearchRes={setSearchRes}
          setView={setView}
          setTattooStyle={setTattooStyle}
          className="searchbar-container"
        ></SearchBar>
        <div className="card-container">
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
        .image-gallery-container {
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
        .searchbar-container {
          background-color: white;
        }
        .card-container {
          display: flex;
          flex-wrap: wrap;
          margin: 43px;
        }
      `}</style>
    </Layout>
  );
};
export default withApollo(ImageGallery);
