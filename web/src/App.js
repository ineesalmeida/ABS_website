import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import MainPage from './pages/Main';
import AboutPage from './pages/About';
import PolicyPage from './pages/Policy';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="body_container">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/policy">
            <PolicyPage />
          </Route>
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
      <div className="footer">
        <Link to="/policy" className="policy_link">Read about our privacy policy</Link>
      </div>
    </Router>
  );
}

export default App;
