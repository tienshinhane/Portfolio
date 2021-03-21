import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import Unity, { UnityContent } from "react-unity-webgl";

function App() {
  let unityContent = new UnityContent(
    "androidproject/Build/WebGL.json",
    "androidproject/Build/UnityLoader.js"
  );
  return (
    <>
      <div className="unity-container">
        <Unity unityContent={unityContent} width="50%" />
      </div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
