// const { dataSources } = require('./twitterDataSource');
const axios = require('axios');
const resolvers = {
  Query: {
    tweet: async (_Source, { id }, { dataSources }) => {
      const response = await dataSources.twitterAPI.getTweet(id);
      var tweet = {
        id: response.data.id,
        text: response.data.text,
      };
      return tweet;
    },
    artist: async (_Source, { username }, { dataSources }) => {
      const response = await dataSources.twitterAPI.getArtist(username);
      var artist = {
        id: response.data.id,
        // name: response.data.text,
        username: response.data.username,
        profile_image_url: response.data.profile_image_url,
        // location: response.data.location,
        // url: response.data.url,
      };
      return artist;
    },
    searched: async (_Source, { search }, { dataSources }) => {
      let response = await dataSources.twitterAPI.recentSearch(search);
      let dataArray = response.data;
      var tweets = dataArray.map((item) => {
        var tweet = {
          id: item.id,
          text: item.text,
        };
        return tweet;
      });

      return tweets;
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////pixabay reolvers
    //////////////////////////////////////////////////////////////////////////////////////////////////
    searchedImage: async (_, { query }, { Token }) => {
      var response = await axios.get(
        `https://pixabay.com/api/?key=${Token}&q=${query}&image_type=photo&pretty=true`
      );
      var dataArray = response.data.hits;
      var images = dataArray.map((item) => {
        var image = {
          user: item.user,
          id: item.id,
          tags: item.tags,
          largeImageURL: item.largeImageURL,
          likes: item.likes,
        };
        return image;
      });
      return images;
    },
  },
};
module.exports.resolvers = resolvers;
