import { withApollo } from '../libs/Apollo';
import Layout from '../components/Layout.jsx';

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="main-title">Tattoo M3</div>
        <div className="video-container">
          <video loop autoPlay src={require('../public/Pexels.mp4')} />
        </div>
      </div>
      <style jsx>{`
        .home {
          width: 100%;
          color: #333;
        }
        .main-title {
          position: absolute;
          left: 37vw;
          z-index: 1;
          font-size: 10vh;
          font-family: Permanent Marker;
          color: aliceblue;
        }
        .video-container {
          width: auto;
        }
        video {
          width: 100%;
          height: 100%;
          position: absolute;
          object-fit: cover;
          z-index: 0;
        }
      `}</style>
    </Layout>
  );
};

export default withApollo(Home);
