import './App.css';
import AppHeaders from './component/Appheader';
import Footer from './component/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import CategoryOne from './CategoryOne';

export default function App() {
  
  return (
    <BrowserRouter>
      <div className="App" >
        <AppHeaders />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='categoryone/' element={<CategoryOne />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
    
}

