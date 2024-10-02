import logo from './logo.svg';
import './App.css';
import './style/landingPage.css';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Horror from './components/Horror';
import NavBar from './components/Nav';


function App() {
  return (
    <div>
      <div className='myBG'>
        <NavBar />
        <Intro />
      </div>
      <div className='trending'>
        <Trending/>
      </div>
      <div className='horror'>
        <Horror/>
      </div>
    </div>
  );
}

export default App;
