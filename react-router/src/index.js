import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Projects = ({ match }) => (
  <div>
    <h2>Projects</h2>
    <ul>
      <li>
        <Link to={`${match.url}/project1`}>Project 1</Link>
      </li>
      <li>
        <Link to={`${match.url}/project2`}>Project 2</Link>
      </li>
    </ul>
    <Route path={`${match.url}/:projectId`} component={Project} />
  </div>
);

const Project = ({ match }) => (
  <div>
    <h3>{match.params.projectId}</h3>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
