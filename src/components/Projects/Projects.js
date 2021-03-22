import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

import androidprojectbanner from "../../assets/images/projectheaders/androidproject1.png";
import edgespearmusicbanner from "../../assets/images/projectheaders/edgespearmusic.png";

// React Popup Box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  //#region Websites
  const openPopupboxMusicInfo = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={edgespearmusicbanner}
          alt="edge spear music Banner"
        />
        <div class="info-text">
          <h3>edgespearMusic.com</h3>
          <p>
            edgespearMusic.com was created as a way to showcase my music
            projects to potential clients, much in the same way that this
            website is intended to showcase some of my programming projects.
          </p>

          <p>
            It was created by myself and a friend who turned me onto the Angular
            framework and served as an excellent starting point for me to begin
            learning how to build modern, responsive, component-based websites.
            I continue to explore what Angular has to offer, as is shown by this
            website you are currently visiting.
          </p>

          <p>
            The source code is unavailable due to privacy regarding my
            professional published projects and my clients' projects.
          </p>
        </div>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "edgespearMusic.com",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  const popupboxConfigedgespearmusic = {
    titleBar: {
      enable: true,
      text: "edgespearmusic.com",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //#endregion

  //#region Games
  // Android Info
  const openPopupboxAndroidInfo = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={androidprojectbanner}
          alt="Untitled Android Project Banner"
        />
        <div class="info-text">
          <h3>Untitled Android Project</h3>
          <p>
            My most recent project, as yet untitled, takes inspiration from the
            original Pokemon games on the GameBoy and combines a key feature
            from one of the original Harry Potter games, namely the
            drawing/tracing of shapes on the screen.
          </p>

          <p>
            The demo is currently playable but is extremely limited. I intend to
            expand into a full wizarding-world that allows players to collect
            and use spells in turn-based combat, as well as customise their own
            character. This game is not intended to be multiplayer but will be
            the first project of mine to feature a storyline.
          </p>

          <h3>
            <strong>About The Build</strong>
          </h3>

          <p>There are only two scenes: Main Game and Battle Scene.</p>

          <p>
            The Main Game features 'portable game device' controls for mobile,
            dialogue functionality, an 'automatic movement' system over the
            small bridge and a pocket-monster-style battle initiation with the
            enemy to the right of the main bridge.
          </p>

          <p>
            The Battle Scene features a duel system; The enemy chooses a spell,
            the player chooses a spell, both attempt to trace the spell as
            accurately as possible, damage/health is calculated relevant to the
            accuracy of the trace. Rinse and repeat until a winner is declared.
          </p>

          <p>
            The drawing system is the most complex part of the game so far,
            using an idea and code snippet from
            <a href="http://theflyingkeyboard.net/unity/unity-2d-c-drawing-lines-with-mouse/">
              theflyingkeyboard
            </a>
            to have different line objects connected together and coloured
            either red or green depending on whether or not they're within a
            boundary
          </p>
        </div>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Untitled Android Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  const popupboxConfigAndroid = {
    titleBar: {
      enable: true,
      text: "Untitled Android Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //#endregion
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
                    <a onClick={openPopupboxMusicInfo}>Info</a>
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
                    <a href="/" target="_blank" rel="noreferrer">
                      Play
                    </a>
                    <a onClick={openPopupboxAndroidInfo}>Info</a>
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
      <PopupboxContainer />
      {/* <PopupboxContainer {...popupboxConfigAndroid} /> */}
    </div>
  );
};

export default Projects;
