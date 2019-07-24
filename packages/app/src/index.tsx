import * as React from "react";
import * as ReactDOM from "react-dom";

import "normalize.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FlexBoxSampleLayout from "./components/flexbox-layout-sample";
import MyWorker from "./log.worker";
// const MyWorker = require("worker-loader?name=dist/[name].js!./worker");

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
  const worker = new MyWorker();
  worker.onmessage = (ev: MessageEvent) => {
    console.log("received");
    console.log(ev);
    /// worker.terminate();
  };
  worker.postMessage("Hi Started");
  worker.postMessage("Try");
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
