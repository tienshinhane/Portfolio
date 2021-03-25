import edgespearmusicbanner from "../../assets/images/projectheaders/edgespearmusic.png";
import edgespearprojectsbanner from "../../assets/images/projectheaders/edgespearprojects.png";

import androidprojectbanner from "../../assets/images/projectheaders/androidproject1.png";
import bumperballbanner from "../../assets/images/projectheaders/bumperball.png";
import blackjackbanner from "../../assets/images/projectheaders/blackjack.png";
import burgergamebanner from "../../assets/images/projectheaders/bugergame.png";
import breakoutbanner from "../../assets/images/projectheaders/breakout.png";

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
        alt="edge spear music Banner"
      />
      <div class="info-text">
        <h3>edgespearMusic.com</h3>
        <p>
          edgespearMusic.com was created as a way to showcase my music projects
          to potential clients, much in the same way that this website is
          intended to showcase some of my programming projects.
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
      <div class="info-text">
        <h3>edgespearProjects.com</h3>
        <p></p>
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
      <div class="info-text">
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
          an idea and code snippet from
          <a href="http://theflyingkeyboard.net/unity/unity-2d-c-drawing-lines-with-mouse/">
            theflyingkeyboard
          </a>
          to have different line objects connected together and coloured either
          red or green depending on whether or not they're within a boundary
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
      <div class="info-text">
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
      <div class="info-text">
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
      <div class="info-text">
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
      <div class="info-text">
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
        src={breakoutbanner}
        alt="Breakout Banner"
      />
      <div class="info-text">
        <h3>K-9 Havok Daycare App</h3>
        <p></p>
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
