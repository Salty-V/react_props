import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllCelebrities from './pages/AllCelebrities';
import CelebritiesDetails from './pages/CelebritiesDetails';
import RandomStar from './pages/RandomStar';
import Presentateurs from './pages/Presentateurs';
import UseStatePage from './pages/UseStatePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all" element={<AllCelebrities />} />
          <Route path="/all/:id" element={<CelebritiesDetails />} />
          <Route path="/random" element={<RandomStar />} />
          <Route path="/presentateurs" element={<Presentateurs />} />
          <Route path="/button" element={<UseStatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
