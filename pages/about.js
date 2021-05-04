import Layout from '../components/Layout';
const About = () => {
  return (
    <Layout>
      <h1
        style={{
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        About
      </h1>
      <img
        className="backgroundImageBlur"
        style={{
          zIndex: -1,
          position: 'absolute',
          width: '100%',
          height: '90%',
        }}
        src="/Tattooing_Background.jpg"
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: 'auto',
          height: '791px',
          justifyContent: 'center',
        }}
      >
        {/* <Image
          className="backgroundImageBlur"
          layout="fill"
          objectFit="cover"
          src="/images/Tattooing_Background.jpg"
        /> */}
        <div className="about-container">
          <h2>WELCOME TO TATTOO M3!</h2>
          <div>
            ESTABLISHED IN 2020 TATTOO M3 was a project created to connect
            tattoo new comers, those curious about tattoos and tattoo enthusiast
            with inspirations as well as tattoo artist in their area.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
