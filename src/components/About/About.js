import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="About-header">
      <div className="split left">
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="centered"></div>
      </div>
      <div className="Vertical"></div>
      <div className="split right">
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="centered">
          <h3>
            Studying with the Open University alongside my own personal projects
            and research has given me varied experience with the following:
          </h3>
          <div className="languages">
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>C#</li>
              <li>Java</li>
              <li>SQL (MySQL)</li>
              <li>PHP</li>
              <li>React</li>
              <li>Angular 7+</li>
              <li>Ionic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
