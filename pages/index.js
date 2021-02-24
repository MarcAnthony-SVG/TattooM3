import gql from "graphql-tag";
import { withApollo } from "../libs/Apollo";
import Layout from "../components/Layout";

const Home = () => {
  // const { data, loading, error } = useQuery(HELLO_QUERY);
  return (
    <Layout>
      <div className="hero">
        <div>
            <div className="mainTitle">Tattoo M3</div>
          <div className="videoComponent">
            <video loop autoPlay src={require("../public/Pexels.mp4")} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin-top: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .list {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  );
};

export default withApollo(Home);
