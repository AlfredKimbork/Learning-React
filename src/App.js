
import Navbar from './Navbar';
import Home from './Home';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <div className="component">
        <Home/>
      </div>
    </div>
  );
}

export default App;
