import "./App.css";

import CourseDetails from './pages/detail/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/home/Home";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/detail" element={<CourseDetails/>} />
      

      </Routes>
      
    </Router>
  );
}

export default App;



