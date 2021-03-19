import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="Projects-container">
      <h2>Projects</h2>
      <div className="divider-darkbg"></div>
      <div className="Projects-main">
        <div className="Websites-container">
          <h2>Websites</h2>
          <div className="Horizontal"></div>
          {/* <!--Music project tab--> */}
          <div className="my-projects">
            <div className="project music">
              <div className="project-inner">
                <div className="entry-title">
                  <h3>edgespearMusic.com</h3>
                  <div className="logo"></div>
                </div>
                <div className="entry-content">
                  <ul>
                    <li>
                      <strong>Framework: </strong>Angular 7
                    </li>
                    <li>
                      <strong>Languages: </strong>HTML, CSS, TS
                    </li>
                    <li>
                      <strong>Platforms: </strong>Web
                    </li>
                    <li>
                      <strong>Status: </strong>Live
                    </li>
                    <li>
                      <strong>Source Files: </strong>TBC
                    </li>
                  </ul>
                </div>
                <div className="btn-table">
                  <div className="btn">
                    <a
                      href="http://edgespearmusic.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit
                    </a>
                    <a href="/">Info</a>
                  </div>
                </div>
              </div>
            </div>
            {/* {<!-- end of Music project tab-->} */}
            {/* <!--Portfolio project tab--> */}
            <div className="project portfolio">
              <div className="project-inner">
                <div className="entry-title">
                  <h3>edgespearProjects.com</h3>
                  <div className="logo"></div>
                </div>
                <div className="entry-content">
                  <ul>
                    <li>
                      <strong>Framework: </strong>React
                    </li>
                    <li>
                      <strong>Languages: </strong>JSX, CSS, JS
                    </li>
                    <li>
                      <strong>Platforms: </strong>Web
                    </li>
                    <li>
                      <strong>Status: </strong>Live
                    </li>
                    <li>
                      <strong>Source Files: </strong>TBC
                    </li>
                  </ul>
                </div>
                <div className="btn-table">
                  <div className="btn">
                    <a
                      className="not-active"
                      href="http://edgespearprojects.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      You're Here!
                    </a>
                    <a href="/">Info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {<!-- end of Portfolio project tab-->} */}
        </div>
        <div className="divider-dot-darkbg"></div>
        <div className="Games-container">
          <h2>Games</h2>
          <div className="Horizontal"></div>
          <div className="my-projects">
            {/* Android Project project tab */}
            <div className="project">
              <div className="project-inner">
                <div className="entry-title">
                  <h3>Untitled Android Project</h3>
                  <div className="logo"></div>
                </div>
                <div className="entry-content">
                  <ul>
                    <li>
                      <strong>Engine: </strong>Unity
                    </li>
                    <li>
                      <strong>Languages: </strong>C#
                    </li>
                    <li>
                      <strong>Platforms: </strong>Windows/Android
                    </li>
                    <li>
                      <strong>Status: </strong>Work In Progress
                    </li>
                    <li>
                      <strong>Source Files: </strong>TBC
                    </li>
                  </ul>
                </div>
                <div className="btn-table">
                  <div className="btn">
                    <a
                      href="../../assets/WebGL/androidproject/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Play
                    </a>
                    <a href="/">Info</a>
                    <a href="/" className="not-active">
                      Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end of Android project tab--> */}
            {/* <!--Bumper Ball project tab--> */}
            <div className="project bumper">
              <div className="project-inner">
                <div className="entry-title">
                  <h3>Bumper Ball</h3>
                  <div className="logo"></div>
                </div>
                <div className="entry-content">
                  <ul>
                    <li>
                      <strong>Engine: </strong>Unity
                    </li>
                    <li>
                      <strong>Languages: </strong>C#
                    </li>
                    <li>
                      <strong>Platforms: </strong>Windows/Android
                    </li>
                    <li>
                      <strong>Status: </strong>Work In Progress
                    </li>
                    <li>
                      <strong>Source Files: </strong>TBC
                    </li>
                  </ul>
                </div>
                <div className="btn-table">
                  <div className="btn">
                    <a href="/" className="not-active">
                      Play
                    </a>
                    <a href="/">Info</a>
                    <a href="/" className="not-active">
                      Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end of Bumper Ball project tab--> */}
            {/* <!--Blackjack project tab--> */}
            <div className="project blackjack">
              <div className="project-inner">
                <div className="hot">New!</div>
                <div className="entry-title">
                  <h3>Blackjack</h3>
                  <div className="logo"></div>
                </div>
                <div className="entry-content">
                  <ul>
                    <li>
                      <strong>Engine: </strong>Unity
                    </li>
                    <li>
                      <strong>Languages: </strong>C#
                    </li>
                    <li>
                      <strong>Platforms: </strong>Windows/Android
                    </li>
                    <li>
                      <strong>Status: </strong>Playable Demo
                    </li>
                    <li>
                      <strong>Source Files: </strong>
                      <a
                        href="https://github.com/edgespeargames/blackjack.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <u>GitHub</u>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="btn-table">
                  <div className="btn">
                    <a
                      href="../../assets/WebGL/blackjack/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Play
                    </a>
                    <a href="/">Info</a>
                    <a href="/" className="not-active">
                      Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end of Blackjack project tab--> */}
            {/* <!--Burger Mania project tab--> */}
            <div className="project burger">
              <div className="project-inner">
                <div className="hot">updated</div>
                <div className="entry-title">
                  <h3>Burger Mania</h3>
                  <div className="logo"></div>
                </div>
                <div className="entry-content">
                  <ul>
                    <li>
                      <strong>Engine: </strong>Unity
                    </li>
                    <li>
                      <strong>Languages: </strong>C#
                    </li>
                    <li>
                      <strong>Platforms: </strong>Windows/Android
                    </li>
                    <li>
                      <strong>Status: </strong>Completed
                    </li>
                    <li>
                      <strong>Source Files: </strong>
                      <a
                        href="https://github.com/edgespeargames/burger-mania.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <u>GitHub</u>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="btn-table">
                  <div className="btn">
                    <a
                      href="../../assets/WebGL/bugermania/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Play
                    </a>
                    <a href="/">Info</a>
                    <a href="/" className="not-active">
                      Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end of Burger Mania project tab--> */}
            {/* <!--Breakout project tab--> */}
            <div className="project breakout">
              <div className="project-inner">
                <div className="hot">updated</div>
                <div className="entry-title">
                  <h3>Breakout</h3>
                  <div className="logo"></div>
                </div>
                <div className="entry-content">
                  <ul>
                    <li>
                      <strong>Engine: </strong>Unity
                    </li>
                    <li>
                      <strong>Languages: </strong>C#
                    </li>
                    <li>
                      <strong>Platforms: </strong>Windows/Android
                    </li>
                    <li>
                      <strong>Status: </strong>Technical Demo
                    </li>
                    <li>
                      <strong>Source Files: </strong>
                      <a
                        href="https://github.com/edgespeargames/breakout.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <u>GitHub</u>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="btn-table">
                  <div className="btn">
                    <a
                      href="../../assets/WebGL/breakout/index.html"
                      target="_blank"
                    >
                      Play
                    </a>
                    <a href="/">Info</a>
                    <a href="/" className="not-active">
                      Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end of Breakout project tab-- > */}
          </div>
        </div>
        <div className="divider-dot-darkbg"></div>
        <div className="Apps-container">
          <h2>Apps</h2>
          <div className="Horizontal"></div>
          {/* <!--Dog project tab--> */}
          <div className="my-projects">
            <div className="project dog">
              <div className="project-inner">
                <div className="entry-title">
                  <h3>K-9 Havok Daycare</h3>
                  <div className="logo"></div>
                </div>
                <div className="entry-content">
                  <ul>
                    <li>
                      <strong>Framework: </strong>Angular 10, Ionic 4
                    </li>
                    <li>
                      <strong>Languages: </strong>HTML, CSS, TS, JS, SQL
                    </li>
                    <li>
                      <strong>Platforms: </strong>Mobile/Web
                    </li>
                    <li>
                      <strong>Status: </strong>Work In Progress
                    </li>
                    <li>
                      <strong>Source Files: </strong>TBC
                    </li>
                  </ul>
                </div>
                <div className="btn-table">
                  <div className="btn">
                    <a href="/" className="not-active">
                      Download
                    </a>
                  </div>
                  <div className="btn">
                    <a href="/">Info</a>
                  </div>
                </div>
              </div>
            </div>
            {/* {<!-- end of Dog project tab-->} */}
          </div>
        </div>
        <div className="divider-dot-darkbg"></div>
      </div>
    </div>
  );
};

export default Projects;
