import './App.css';
import NavBar from './Components/Layout/NavBar/NavBar';
import CardDisplay from './Components/Layout/CardDisplay/CardDisplay';
import Footer from './Components/Layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="navBarContainer">
          <NavBar />
      </div>
      <div id="cardsContainer">
          <CardDisplay />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
