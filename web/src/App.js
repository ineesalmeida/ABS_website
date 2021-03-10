import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import { Container, ContainerColumn } from './components/Container/Container.component';
import MailingListCall from './components/MailingListCall/MailingListCall.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Container>
          <ContainerColumn>
            Content 1
          </ContainerColumn>
          <ContainerColumn>
            <h2>
              You want to have a Barbecue but kangaroos are trying to steal your beer!
            </h2>
            <MailingListCall />
          </ContainerColumn>
        </Container>
      </header>
    </div>
  );
}

export default App;
