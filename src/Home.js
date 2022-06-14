import './App.css';
import FirstContainer from './component/FirstContainer';
import SecondContainer from './component/SecondContainer';
import GrayLine from './component/GrayLine';
import ThirdContainer from './component/ThirdContainer';
import Banner from './component/Banner';

export default function Home() {
  
  return (
      <div>
        <Banner />
        <GrayLine />
        <ThirdContainer />
        <GrayLine />
        <SecondContainer />
        <GrayLine />
        <FirstContainer />
      </div>
  );
    
}

