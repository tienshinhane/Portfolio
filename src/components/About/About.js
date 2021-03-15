import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="About-header">
      <div className="split left">
        <div className="centered">
          <h2>About Me</h2>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <h2>Skills</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
