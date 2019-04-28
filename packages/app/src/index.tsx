import * as React from "react";
import * as ReactDOM from "react-dom";

import "normalize.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FlexBoxSampleLayout from "./components/flexbox-layout-sample";

const Header = () => {
  return (
    <ul style={{}}>
      <li>
        <Link to="/flex-layout-sample">Flex Layout Sample</Link>
      </li>
    </ul>
  );
};

function App() {
  return (
    <Router>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexFlow: "column nowrap",
          minHeight: "100%"
        }}
      >
        {/* <Header /> */}
        <Switch>
          <Route path="/flex-layout-sample" component={FlexBoxSampleLayout} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("example"));
