import Unity, { UnityContent } from "react-unity-webgl";

const GamePage = (props) => {
  console.log(props.location.state.link2);

  let myUnityContent = new UnityContent(
    props.location.state.link1,
    props.location.state.link2
  );

  return (
    <>
      <h1>{props.location.state.title}</h1>
      <div className="unity-container">
        <Unity unityContent={myUnityContent} />
      </div>
    </>
  );
};

export default GamePage;
