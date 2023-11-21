import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllCelebrities from './pages/AllCelebrities';
import CelebritiesDetails from './pages/CelebritiesDetails';
import RandomStar from './pages/RandomStar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/touslesdingos" element={<AllCelebrities />} />
          <Route path="/dingosdetails" element={<CelebritiesDetails />} />
          <Route path="/randomstar" element={<RandomStar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
