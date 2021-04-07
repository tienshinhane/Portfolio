import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="About-header">
      <div className="split left">
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div id="divider-container">
          <div className="divider-lightbg"></div>
        </div>
        <div className="centered">
          <h4>
            I'm a UK-based programmer who enjoys spending as much time making
            things work as look good.
            <br></br>
            <br></br>I studied with the Open University for a BSc in Computing
            and IT, specialising in Software and Solutions.<br></br> The OU gave
            me my first taste of proper programming with Java and since then,
            I've continued to expand my horizons to gaming and the web.
            <br></br>
            <br></br>Currently employed in retail, I make games, websites and
            apps for my own pleasure, but I am putting every effort I can into
            making a career of it.
          </h4>
          <br></br>
          <h3>TL;DR: I love to learn. I live to learn.</h3>
        </div>
      </div>
      <div className="Vertical"></div>
      <div className="split right">
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div id="divider-container">
          <div className="divider-lightbg"></div>
        </div>
        <div className="centered">
          <h4>
            Studying with the Open University alongside my own personal projects
            and research has given me varied experience with the following:
          </h4>
          <div className="languages">
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>C#</li>
              <li>Java</li>
              <li>SQL (MySQL)</li>
              <li>React</li>
              <li>Angular 7+</li>
              <li>Ionic</li>
              <li>Adobe Photoshop, XD</li>
              <li>Unity</li>
              <li>Blender</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
