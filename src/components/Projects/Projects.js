import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// React Popup Box
import { PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import {
  openPopupboxMusicInfo,
  openPopupboxAndroidInfo,
  openPopupboxBumperInfo,
  openPopupboxBlackjackInfo,
  openPopupboxBurgerInfo,
  openPopupboxBreakoutInfo,
  openPopupboxPortfolioInfo,
  openPopupboxDogInfo,
} from "./Content";

const Projects = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 1) {
      openPopupboxMusicInfo();
      setCount(0);
    }
    if (count === 2) {
      openPopupboxPortfolioInfo();
      setCount(0);
    }
    if (count === 3) {
      openPopupboxAndroidInfo();
      setCount(0);
    }
    if (count === 4) {
      openPopupboxBumperInfo();
      setCount(0);
    }
    if (count === 5) {
      openPopupboxBlackjackInfo();
      setCount(0);
    }
    if (count === 6) {
      openPopupboxBurgerInfo();
      setCount(0);
    }
    if (count === 7) {
      openPopupboxBreakoutInfo();
      setCount(0);
    }
    if (count === 8) {
      openPopupboxDogInfo();
      setCount(0);
    }
  }, [count]);

  return (
    <div id="projects" className="Projects-container">
      <h2>Projects</h2>
      <div id="divider-container">
        <div className="divider-darkbg"></div>
      </div>

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
                    <a className="info" onClick={() => setCount(1)}>
                      Info
                    </a>
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
                      <strong>Languages: </strong>JSX, CSS, PHP
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
                    <a className="info" onClick={() => setCount(2)}>
                      Info
                    </a>
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
                    <Link
                      className="play-link"
                      to={{
                        pathname: "/GamePage",
                        state: {
                          title: "Untitled Android Game",
                          link1: "androidproject/Build/androidproject.json",
                          link2: "androidproject/Build/UnityLoader.js",
                        },
                      }}
                    >
                      Play
                    </Link>
                    <a className="info" onClick={() => setCount(3)}>
                      Info
                    </a>
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
                    <a className="info" onClick={() => setCount(4)}>
                      Info
                    </a>
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
                    <Link
                      className="play-link"
                      to={{
                        pathname: "/GamePage",
                        state: {
                          title: "Blackjack",
                          link1: "blackjack/Build/Builds.json",
                          link2: "blackjack/Build/UnityLoader.js",
                        },
                      }}
                    >
                      Play
                    </Link>
                    <a className="info" onClick={() => setCount(5)}>
                      Info
                    </a>
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
                    <Link
                      className="play-link"
                      to={{
                        pathname: "/GamePage",
                        state: {
                          title: "Burger Mania",
                          link1: "bugermania/Build/WebGL.json",
                          link2: "bugermania/Build/UnityLoader.js",
                        },
                      }}
                    >
                      Play
                    </Link>
                    <a className="info" onClick={() => setCount(6)}>
                      Info
                    </a>
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
                    <Link
                      className="play-link"
                      to={{
                        pathname: "/GamePage",
                        state: {
                          title: "Breakout",
                          link1: "breakout/Build/WebGL.json",
                          link2: "breakout/Build/UnityLoader.js",
                        },
                      }}
                    >
                      Play
                    </Link>
                    <a className="info" onClick={() => setCount(7)}>
                      Info
                    </a>
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
                    <a className="info" onClick={() => setCount(8)}>
                      Info
                    </a>
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
    </div>
  );
};

export default Projects;
