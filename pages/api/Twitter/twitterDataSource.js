const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class twitterAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://movies-api.example.com/";
  }

  async getMovie(id) {
    return this.get(`movies/${id}`);
  }

  async getMostViewedMovies(limit = 10) {
    const data = await this.get("movies", {
      per_page: limit,
      order_by: "most_viewed",
    });
    return data.results;
  }
  willSendRequest(request) {
    request.headers.set("Authorization", this.context.token);
  }
}
export const twitterDataSources = () => ({
  twitterAPI: new twitterAPI(),
});
