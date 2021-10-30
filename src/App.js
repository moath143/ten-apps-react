import "./App.css";
import Buttons from "./Components/Buttons";
import App_one from "./Applications/App_one/App_one";
import App_two from "./Applications/App_two/App_two";
import App_three from './Applications/App_three/App_three'
import App_four from "./Applications/App_four/App_four";
import App_five from "./Applications/App_five/App_five";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <h1>Applications built by React js</h1>
          <Buttons />
          <Switch>
            <Route path="/app1">
              <App_one />
            </Route>
            <Route path="/app2">
              <App_two />
            </Route>
            <Route path="/app3">
              <App_three />
            </Route>
            <Route path="/app4">
              <App_four />
            </Route>
            <Route path="/app5">
              <App_five />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
