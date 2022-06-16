import './App.css';
import FirstContainer from './component/FirstContainer';
import SecondContainer from './component/SecondContainer';
import GrayLine from './component/GrayLine';
import ThirdContainer from './component/ThirdContainer';
import Banner from './component/Banner';
import FilterList from './component/FilterList';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FilterListBlue from './component/FilterListBlue';

export default function Home() {
  
  return (
      <div>
        <Banner />
        <GrayLine />
        <Routes>
        <Route path='/' element={<FilterList />} />
        <Route path='/blue' element={<FilterListBlue />} />
        </Routes>
        <GrayLine />
        <ThirdContainer />
        <GrayLine />
        <SecondContainer />
        <GrayLine />
        <FirstContainer />
      </div>
  );
    
}

