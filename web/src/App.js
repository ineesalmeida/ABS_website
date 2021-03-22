import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import { Container, ContainerColumn } from './components/Container/Container.component';
import MailingListCall from './components/MailingListCall/MailingListCall.component';
import Gallery from './components/Gallery/Gallery.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import front_page_img from './assets/img/front-page.png';
// import screenshot_1 from './assets/img/screenshot_1.png';
// import screenshot_2 from './assets/img/screenshot_2.png';
import screenshot_3 from './assets/img/screenshot_3.png';
// import screenshot_4 from './assets/img/screenshot_4.png';
// import screenshot_5 from './assets/img/screenshot_5.png';
// import screenshot_6 from './assets/img/screenshot_6.png';
// import screenshot_7 from './assets/img/screenshot_7.png';
// import screenshot_8 from './assets/img/screenshot_8.png';

function MainPage() {
  return (
    <Container>
      <ContainerColumn key="left">
        <div className="font_page_image">
          <img src={front_page_img} alt="game-play"></img>
        </div>
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

  let screenshots = [
    // screenshot_1,
    // screenshot_2,
    screenshot_3,
    // screenshot_4,
    // screenshot_5,
    // screenshot_6,
    // screenshot_7,
    // screenshot_8,
  ]

  return (
    <Container>
      <ContainerColumn>
        <span>
          Beers & Boomerangs is a VR game where you are trying to have a peaceful  barbecue with your mates, but thirsty adorable <b>Kangaroos</b> are trying to steal your beer. Protect your beers with your most loyal <b>Boomerang</b>
        </span>
      </ContainerColumn>
      <ContainerColumn>
        <Gallery images={screenshots} />
      </ContainerColumn>
    </Container >
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="body_container">
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
