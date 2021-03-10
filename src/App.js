import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CarouselScreen from "./components/CarouselScreen"
import  MediaScreen from "./components/MediaScreen"
import  Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselScreen />
      <br></br>
      <MediaScreen />
    </div>
  );
}

export default App;
