import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen'
import ResourcesScreen from "./components/ResourcesScreen";
import AboutUsScreen from "./components/AboutUsScreen";
import ProjectsScreen from "./components/ProjectsScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomeScreen />}></Route>
          <Route path="/about" exact component={() => <AboutUsScreen />}></Route>
          <Route path="/projects" exact component={() => <ProjectsScreen />}></Route>
          <Route path="/resources" exact component={() => <ResourcesScreen />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;