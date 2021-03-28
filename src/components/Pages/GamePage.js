import Unity, { UnityContent } from "react-unity-webgl";
import "./GamePage.css";

const GamePage = (props) => {
  let myUnityContent = new UnityContent(
    props.location.state.link1,
    props.location.state.link2
  );

  return (
    <>
      <div className="webgl-content">
        <div id="unityContainer"></div>
        <div className="footer">
          <div className="webgl-logo"></div>
          <div
            className="fullscreen"
            onClick={myUnityContent.setFullscreen(true)}
          ></div>
          <div className="title">{props.location.state.title}</div>
          <div className="unity-container">
            <Unity unityContent={myUnityContent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
