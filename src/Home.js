import './App.css';
import FirstContainer from './component/FirstContainer';
import SecondContainer from './component/SecondContainer';
import GrayLine from './component/GrayLine';
import ThirdContainer from './component/ThirdContainer';

export default function Home() {
  
  return (
      <div>
        <FirstContainer />
        <GrayLine />
        <ThirdContainer />
        <GrayLine />
        <SecondContainer />
      </div>
  );
    
}

