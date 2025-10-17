import Aboutus from './Aboutus';
import Homepage from './Home';
import LoadData from './LoadData';
import Counter from './Counter';
import logo from './logo.svg';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div id="d1">
      <Link classsName="a" to="/">Homepage</Link>
      <Link classsName="a" to="/Aboutus">Aboutus</Link>
      <Link classsName="a" to="/Counter">Counter</Link>
      <Link classsName="a" to="/loadData">Load Data</Link>
      </div>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/Aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/Counter" element={<Counter></Counter>}></Route>
        <Route path="/LoadData" element={<LoadData></LoadData>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
