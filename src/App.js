import './App.css';
import AppHeaders from './component/Appheader';
import Footer from './component/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import CategoryOne from './CategoryOne';
import CategoryTwo from './CategoryTwo';
import CategoryThree from './CategoryThree';
import TopButton from './component/TopButton';

export default function App() {
  
  return (
    <BrowserRouter>
      <div className="App" >
        <AppHeaders />
        <TopButton />
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/categoryone/' element={<CategoryOne />} />
          <Route path='/categorytwo/' element={<CategoryTwo />} />
          <Route path='/categorythree/' element={<CategoryThree />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
    
}

