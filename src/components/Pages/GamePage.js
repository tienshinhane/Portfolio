import Unity, { UnityContent } from "react-unity-webgl";
import "./GamePage.css";

const GamePage = (props) => {
  let myUnityContent = new UnityContent(
    props.location.state.link1,
    props.location.state.link2
  );

  return (
    <>
      <div id="main-container">
        <div className="title">{props.location.state.title}</div>
        <div className="unity-container">
          <Unity unityContent={myUnityContent} className="unity-content" />
        </div>
      </div>
    </>
  );
};

export default GamePage;
