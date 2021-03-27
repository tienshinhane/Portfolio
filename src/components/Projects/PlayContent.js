// React Popup Box
import { PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import Unity, { UnityContent } from "react-unity-webgl";

//Untitled Android Project
export const openPopupboxPlayAndroid = () => {
  let myUnityContent = new UnityContent(
    "androidproject/Build/WebGL.json",
    "androidproject/Build/UnityLoader.js"
  );

  const content = (
    <>
      <div className="unity-container">
        <Unity unityContent={myUnityContent} />
      </div>
      <button onClick={() => console.log("Clicked")}>Remove!</button>
    </>
  );

  window.myUnityContent = myUnityContent;

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

  PopupboxManager.config.onCleanUp = () => {
    myUnityContent.remove();
  };
};

//Bumper Ball
export const openPopupboxPlayBumperBall = () => {};

//Blackjack
export const openPopupboxPlayBlackjack = () => {
  let myUnityContent = new UnityContent(
    "blackjack/Build/Builds.json",
    "blackjack/Build/UnityLoader.js"
  );

  const content = (
    <>
      <div className="unity-container">
        <Unity unityContent={myUnityContent} />
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

  PopupboxManager.config.onCleanUp = () => {
    //do something
  };
};

//Burger Mania
export const openPopupboxPlayBurgerMania = () => {
  let myUnityContent = new UnityContent(
    "burgermania/Build/WebGL.json",
    "burgermania/Build/UnityLoader.js"
  );

  const content = (
    <>
      <div className="unity-container">
        <Unity unityContent={myUnityContent} />
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

  PopupboxManager.config.onCleanUp = () => {
    //do something
  };
};

//Breakout
export const openPopupboxPlayBreakout = () => {
  let myUnityContent = new UnityContent(
    "breakout/Build/WebGL.json",
    "breakout/Build/UnityLoader.js"
  );

  const content = (
    <>
      <div className="unity-container">
        <Unity unityContent={myUnityContent} />
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

  PopupboxManager.config.onCleanUp = () => {
    //do something
  };
};
