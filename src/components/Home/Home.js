import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  const nameColor = {
    color: `#7e3bbc`,
  };

  return (
    <div id="home" className="Home">
      <header className="Home-header">
        <p>
          Hi, I'm <span style={nameColor}>Jonathan.</span>
        </p>
        <p>Passionate Programmer of Games, Websites and Apps.</p>
        <p>Based in England, UK.</p>
      </header>
    </div>
  );
};

export default Home;
