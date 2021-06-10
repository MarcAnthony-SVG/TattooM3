import Cards from './Cards.jsx';
import React from 'react';
import { gql, useQuery } from '@apollo/client';
const SEARCH = gql`
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

const SearchResultsContainer = ({ searchRes }) => {
  const { loading, error, data } = useQuery(SEARCH, {
    variables: { search: `${searchRes}` },
  });
  if (error) return `Error! ${error.message}`;
  if (loading) return 'Loading...';
  console.log('Testing Tattoo Style', `tattoo ${searchRes}`);
  var userData = data.searched_PB_By_Style;
  console.log(userData);

  return (
    <div className="card-container">
      {userData.map((user, id) => (
        <Cards
          userName={user.user}
          likes={user.likes}
          key={id}
          pic={user.largeImageURL}
        ></Cards>
      ))}
      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
          margin: 43px;
        }
      `}</style>
    </div>
  );
};
export default SearchResultsContainer;
