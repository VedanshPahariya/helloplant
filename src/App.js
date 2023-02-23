import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import PlantContainerPage from './Components/plantContainer/PlantContainerPage';
import PlantInfo from './Components/plantContainer/PlantInfo';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<PlantContainerPage />} />
          <Route path="/plant-info" element={<PlantInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
