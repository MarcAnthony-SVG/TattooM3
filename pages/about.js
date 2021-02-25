import Layout from '../components/Layout';
import test from './api/API';

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <div className="about-container">
      <h2>WELCOME TO TATTOO M3!</h2>
      <div>
        ESTABLISHED IN 2020 TATTOO M3 was a project created to connect tattoo
        new comers, those curious about tattoos and tattoo enthusiast with
        inspirations as well as tattoo artist in their area.
      </div>
      </div>
    </Layout>
  );
};

export default About;
