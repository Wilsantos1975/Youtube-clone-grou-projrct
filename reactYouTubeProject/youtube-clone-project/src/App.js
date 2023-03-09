import './App.css';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import VideoIndex from './Components/VideoIndex';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <VideoIndex />
      <Footer />
    </div>
  );
}

export default App;
