import './App.css';
import Header from './components/header/header';
import Courses from './pages/courses/courses';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/">
            <Courses />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
