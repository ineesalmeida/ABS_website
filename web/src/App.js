import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import { Container, ContainerColumn } from './components/Container/Container.component';
import MailingListCall from './components/MailingListCall/MailingListCall.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function MainPage() {
  return (
    <Container>
      <ContainerColumn key="left">
        Content 1
      </ContainerColumn>
      <ContainerColumn key="right">
        <h2 className="header_title">
          <span>You are having a Barbecue but </span>
          <span className="emphasis_1">kangaroos are trying to</span>
          <span className="emphasis_2">steal your beer!</span>
        </h2>
        <MailingListCall />
      </ContainerColumn>
    </Container>
  )
}

function AboutPage() {
  return (
    <Container>
      <ContainerColumn>
        <span>
          Beers & Boomerangs is a VR game where you are trying to have a peaceful  barbecue with your mates, but thirsty adorable <b>Kangaroos</b> are trying to steal your beer. Protect your beers with your most loyal <b>Boomerang</b>
        </span>
      </ContainerColumn>
      <ContainerColumn>
        Images
      </ContainerColumn>
    </Container >
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
