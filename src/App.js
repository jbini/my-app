import './App.css';
import AppHeaders from './component/Appheader';
import FirstContainer from './component/FirstContainer';
import Footer from './component/Footer';
import SecondContainer from './component/SecondContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import GrayLine from './component/GrayLine';
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

