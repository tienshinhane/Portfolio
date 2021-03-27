import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GamePage from "./components/Pages/GamePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/Pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/GamePage" component={GamePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
