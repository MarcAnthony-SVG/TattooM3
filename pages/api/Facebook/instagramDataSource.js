const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class instagramAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://graph.facebook.com/v9.0/";
    this.accessToken = process.env.access_token; //Required
  }

  willSendRequest(request) {
    request.headers.set("access-token", this.context.accessToken);
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
}
export const instagramDataSources = () => ({
  instagramAPI: new instagramAPI(),
});
