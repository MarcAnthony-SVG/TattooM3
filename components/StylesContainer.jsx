import Cards from './Cards.jsx';
import React from 'react';
import { gql, useQuery } from '@apollo/client';

const SEARCH_STYLES = gql`
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

const StylesContainer = ({ tattooStyles }) => {
  const { loading, error, data } = useQuery(SEARCH_STYLES, {
    variables: { search: `${tattooStyles}` },
  });
  if (error) return `Error! ${error.message}`;
  if (loading) return 'Loading...';
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
export default StylesContainer;
