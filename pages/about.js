import Layout from '../components/Layout.jsx';
const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <img src="/Tattooing_Background.jpg" />
      <div className="container">
        <div className="about-container">
          <h2>WELCOME TO TATTOO M3!</h2>
          <div>
            ESTABLISHED IN 2020 TATTOO M3 was a project created to connect
            tattoo new comers, those curious about tattoos and tattoo enthusiast
            with inspirations as well as tattoo artist in their area.
          </div>
        </div>
      </div>
      <style jsx>{`
        h1 {
          background-color: black;
          color: white;
        }
        img {
          zindex: -1;
          position: absolute;
          width: 100%;
          height: 90%;
          z-index: -1;
          filter: blur(1px);
          transform: scale(1.1);
        }
        .container {
          position: relative;
          display: flex;
          height: 791px;
          justify-content: center;
        }
        .about-container {
          position: relative;
          top: 200px;
          height: 300px;
          width: 500px;
          background-color: rgba(255, 255, 255, 0.699);
        }
      `}</style>
    </Layout>
  );
};

export default About;
