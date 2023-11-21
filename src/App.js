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
          <Route path="/all" element={<AllCelebrities />} />
          <Route path="/details" element={<CelebritiesDetails />} />
          <Route path="/random" element={<RandomStar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
