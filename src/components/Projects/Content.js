import edgespearmusicbanner from "../../assets/images/projectheaders/edgespearmusic.png";
import edgespearprojectsbanner from "../../assets/images/projectheaders/edgespearprojects.png";

import androidprojectbanner from "../../assets/images/projectheaders/androidproject1.png";
import bumperballbanner from "../../assets/images/projectheaders/bumperball.png";
import blackjackbanner from "../../assets/images/projectheaders/blackjack.png";
import burgergamebanner from "../../assets/images/projectheaders/bugergame.png";
import breakoutbanner from "../../assets/images/projectheaders/breakout.png";
import k9banner from "../../assets/images/projectheaders/dogproject.png";

// React Popup Box
import { PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

//#region Websites
export const openPopupboxMusicInfo = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popupbox"
        src={edgespearmusicbanner}
        alt="edge spear music B
        anner"
      />

      <div className="info-text">
        <h3>edgespearMusic.com</h3>
        <p>
          <a href="http://edgespearmusic.com" target="_blank" rel="noreferrer">
            edgespearMusic.com
          </a>{" "}
          was created as a way to showcase my music projects to potential
          clients, much in the same way that this website is intended to
          showcase some of my programming projects.
        </p>

        <p>
          It was created by myself and a friend who turned me onto the Angular
          framework and served as an excellent starting point for me to begin
          learning how to build modern, responsive, component-based websites. I
          continue to explore what Angular has to offer, as is shown by this
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

export const openPopupboxPortfolioInfo = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popupbox"
        src={edgespearprojectsbanner}
        alt="edge spear projects Banner"
      />
      <div className="info-text">
        <h3>edgespearProjects.com</h3>
        <p>
          I created edgespearProjects.com for two main purposes: To showcase my
          programming skills through projects I've worked on, and to give me
          experience with the React framework. The site is fully responsive and
          utilises JSX, CSS and PHP.
        </p>
        <h3>
          <strong>About The Build</strong>
        </h3>
        <p>
          Being the first single-page app I'd created using the React front-end
          framework, I had a lot of learning to do, but having built my music
          portfolio webpage using Angular, the learning curve was much less
          steep.
        </p>
        <p>
          The build itself is fairly straightforward: A single App containing a
          route to the full page component and another route to the Unity
          component page which opens a selected game in a WebGL player.
        </p>
        <p>
          Tools and functionality used include React-Scroll for smooth
          navigation between components, React-Unity-Webgl to enable interaction
          with my Unity games through the browser, React-Popupbox to enable
          popupboxes like the one in which you are viewing this information and
          PHP for the interactivity of the contact form.
        </p>
        <h3>
          <strong>My Thoughts</strong>
        </h3>
        <p>
          Now that the page is built, I've grown to enjoy using React due to
          it's highly modular and easy-to-get-started nature. Granted, there are
          an awful lot of additional packages out there which are poorly
          documented and hard to use, but equally, the ones that work, work very
          well, and allow for very quick and effective results.
        </p>
      </div>
    </>
  );
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "edgespearProjects.com",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
};

//#endregion
//#region Games
// Android Info

export const openPopupboxAndroidInfo = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popupbox"
        src={androidprojectbanner}
        alt="Untitled Android Project Banner"
      />
      <div className="info-text">
        <h3>Untitled Android Project</h3>
        <p>
          My most recent project, as yet untitled, takes inspiration from the
          original Pokemon games on the GameBoy and combines a key feature from
          one of the original Harry Potter games, namely the drawing/tracing of
          shapes on the screen.
        </p>

        <p>
          The demo is currently playable but is extremely limited. I intend to
          expand into a full wizarding-world that allows players to collect and
          use spells in turn-based combat, as well as customise their own
          character. This game is not intended to be multiplayer but will be the
          first project of mine to feature a storyline.
        </p>

        <h3>
          <strong>About The Build</strong>
        </h3>

        <p>There are only two scenes: Main Game and Battle Scene.</p>

        <p>
          The Main Game features 'portable game device' controls for mobile,
          dialogue functionality, an 'automatic movement' system over the small
          bridge and a pocket-monster-style battle initiation with the enemy to
          the right of the main bridge.
        </p>

        <p>
          The Battle Scene features a duel system; The enemy chooses a spell,
          the player chooses a spell, both attempt to trace the spell as
          accurately as possible, damage/health is calculated relevant to the
          accuracy of the trace. Rinse and repeat until a winner is declared.
        </p>

        <p>
          The drawing system is the most complex part of the game so far, using
          an idea and code snippet from&nbsp;
          <a
            href="http://theflyingkeyboard.net/unity/unity-2d-c-drawing-lines-with-mouse/"
            target="_blank"
            rel="noreferrer"
          >
            theflyingkeyboard
          </a>
          &nbsp;to have different line objects connected together and coloured
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

export const openPopupboxBumperInfo = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popupbox"
        src={bumperballbanner}
        alt="Bumper Ball Banner"
      />
      <div className="info-text">
        <h3>Bumper Ball</h3>
        <p>
          Bumper Ball is inspired by a Crash Bandicoot mini game from 'Crash
          Bash' on the Playstation 1.
        </p>

        <p>
          It is currently in early development and it is my first attempt at an
          online multiplayer game in Unity.
        </p>

        <p>
          My aim is to use Photon Networking tools within Unity to create a
          sort-of "3D Pong" style game with bumper cars, allowing up to 4 player
          battles.
        </p>

        <p>I will keep this updated as a build becomes playable.</p>
      </div>
    </>
  );
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "Bumper Ball",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
};

export const openPopupboxBlackjackInfo = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popupbox"
        src={blackjackbanner}
        alt="Blackjack Banner"
      />
      <div className="info-text">
        <h3>Blackjack</h3>
        <p>A simple blackjack game.</p>

        <p>
          It is currently just a gameplay loop of betting and winning or losing,
          with functionality to reset your balance once you're out of money.
        </p>

        <p>
          I still have to add a main menu and player stats but it is currently
          playable.
        </p>
      </div>
    </>
  );
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "Blackjack",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
};

export const openPopupboxBurgerInfo = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popupbox"
        src={burgergamebanner}
        alt="Burger Mania Banner"
      />
      <div className="info-text">
        <h3>Burger Mania</h3>
        <p>
          A relatively straightforward project, Burger Mania is my take on that
          classic meal-match-style game that was often Adobe Flash/Web based but
          have more recently moved to mobile.
        </p>

        <p>
          The idea is simple: create and serve customers the meal they have
          ordered and earn money before time runs out.
        </p>

        <h3>
          <strong>
            <u>About The Build</u>
          </strong>
        </h3>

        <p>The game features two scenes: Main Menu and Game Scene.</p>

        <p>
          The Main Menu includes an animated introduction with sound effects and
          a sidebar menu with high score and credit buttons.
        </p>

        <p>
          The Game Scene features a simple tutorial menu, which when closed
          allows the player to play a round.
        </p>

        <p>
          The player uses either the keyboard/mouse if on Desktop/Web or touch
          if on mobile to build and match their meal.
        </p>

        <p>
          A high score system is available should the player wish to enter their
          initials and save their score to view later from the Main Menu.
        </p>
      </div>
    </>
  );
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "Burger Mania",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
};

export const openPopupboxBreakoutInfo = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popupbox"
        src={breakoutbanner}
        alt="Breakout Banner"
      />
      <div className="info-text">
        <h3>Breakout</h3>
        <p>
          Breakout is a simple brick-breaker-style game with some added
          features.
        </p>

        <p>
          While the latest version is playable, it is more of a technical demo
          to showcase my programming skills rather than my game development
          skills.
        </p>

        <p>
          For this reason, the UI is very basic and there are extra buttons to
          allow quick progression through levels and between scenes.
        </p>

        <h3>
          <strong>
            <u>About The Build</u>
          </strong>
        </h3>

        <p>
          The game features two scenes: A Main Menu scene and a Game Scene which
          can generate either a campaign round or an endurance round.
        </p>

        <p>
          There is a high score system for the Endurance mode (endless/random
          mode) and a save system for the Campaign mode.
        </p>

        <p>
          The Campaign has a function which allows it to generate the first 36
          levels procedurally with minimal code. I intend to add to this to
          enable more levels to be generated, again with minimal code.
        </p>

        <p>Music and sound effects are also currently being added.</p>
      </div>
    </>
  );
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "Breakout",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
};

//#endregion
//#region Apps
export const openPopupboxDogInfo = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popupbox"
        src={k9banner}
        alt="Canine Havok Daycare Banner"
      />
      <div className="info-text">
        <h3>K-9 Havok Daycare App</h3>
        <p>
          I am currently building a multi-platform app for a client's business
          which is in the process of being set up.
        </p>
        <p>
          The app is designed to allow potential customers to sign up, log in,
          and book a slot for their dog to be looked after during the day.
        </p>
        <h3>
          <strong>
            <u>About The Build</u>
          </strong>
        </h3>
        <p>
          The product is still in early development but I am using Angular and
          Ionic to create a cross-platform mobile app that will be of two parts:
          a customer version which can be downloaded from the app store and used
          to create accounts, log in and request bookings; and a management
          version which will be used by my client to approve or decline
          bookings.
        </p>
        <p>
          So far, the customer version is a working demo in which requests can
          be made to an api in order to create a new user in a MySQL database
          and log them in by validating credentials. The booking side of the app
          is next to be developed.
        </p>
        <p>The management version is yet to be prototyped.</p>
        <p>
          I am using Adobe XD to design the layouts of the screens which will be
          approved by my client before development of said page will begin.
        </p>
      </div>
    </>
  );
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "K-9 Havok Daycare",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
};
//#endregion
