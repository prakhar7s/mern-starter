import "./App.css";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewPost from "./components/New";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new/:id" exact component={NewPost} />
      </Switch>
    </Router>
  );
}

export default App;
