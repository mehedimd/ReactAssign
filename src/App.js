import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import DisplayNavbar from './Components/DisplayNavbar';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Header/>
      <DisplayNavbar/>
      <Welcome/>
    </div>
  );
}

export default App;
