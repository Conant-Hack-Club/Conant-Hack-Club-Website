import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen'
import ResourcesScreen from "./components/ResourcesScreen";
import AboutUsScreen from "./components/AboutUsScreen";
import ProjectsScreen from "./components/ProjectsScreen";
import  TopNavbar from "./components/Navbar"

export default function App() {
  return (
    //0065ea: blue
    //ec3750: red
    <div className="App">
      <Router>
        <TopNavbar />
        <br />
        <br />
        <Switch>
          <Route path="/" exact component={() => <HomeScreen />}></Route>
          <Route
            path="/about"
            exact
            component={() => <AboutUsScreen />}
          ></Route>
          <Route
            path="/projects/:handle"
            component={() => <ProjectsScreen />}
          ></Route>
          <Route
            path="/resources"
            exact
            component={() => <ResourcesScreen />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}
