import Unity, { UnityContent } from "react-unity-webgl";
// import { Link } from "react-router-dom";
import "./GamePage.css";
import { useHistory } from "react-router-dom";

const GamePage = (props) => {
  let myUnityContent = new UnityContent(
    props.location.state.link1,
    props.location.state.link2
  );

  let history = useHistory();

  return (
    <>
      <div id="main-container">
        <div className="title">{props.location.state.title}</div>
        <div className="unity-container">
          <Unity unityContent={myUnityContent} className="unity-content" />
        </div>
        <div className="button-container">
          <button onClick={() => history.goBack()} className="play-link-game">
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default GamePage;
