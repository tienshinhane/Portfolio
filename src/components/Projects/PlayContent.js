// React Popup Box
import { PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import Unity, { UnityContent } from "react-unity-webgl";

//Untitled Android Project
export const openPopupboxPlayAndroid = () => {
  let unityContent = new UnityContent(
    "androidproject/Build/WebGL.json",
    "androidproject/Build/UnityLoader.js"
  );

  const content = (
    <>
      <div className="unity-container">
        <Unity unityContent={unityContent} />
      </div>
    </>
  );
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "Untitled Android Game",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
};

//Bumper Ball
export const openPopupboxPlayBumperBall = () => {};

//Blackjack
export const openPopupboxPlayBlackjack = () => {
  let unityContent = new UnityContent(
    "blackjack/Build/Builds.json",
    "blackjack/Build/UnityLoader.js"
  );

  const content = (
    <>
      <div className="unity-container">
        <Unity unityContent={unityContent} />
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

//Burger Mania
export const openPopupboxPlayBurgerMania = () => {
  let unityContent = new UnityContent(
    "burgermania/Build/WebGL.json",
    "burgermania/Build/UnityLoader.js"
  );

  const content = (
    <>
      <div className="unity-container">
        <Unity unityContent={unityContent} />
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

//Breakout
export const openPopupboxPlayBreakout = () => {
  let unityContent = new UnityContent(
    "breakout/Build/WebGL.json",
    "breakout/Build/UnityLoader.js"
  );

  const content = (
    <>
      <div className="unity-container">
        <Unity unityContent={unityContent} />
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
