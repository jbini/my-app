import './App.css';
import FirstContainer from './component/FirstContainer';
import GrayLine from './component/GrayLine';
import SecondContainer from './component/SecondContainer';

export default function CategoryOne() {
  return (
      <div>
        <FirstContainer />
        <GrayLine />
        <SecondContainer />
        <GrayLine />
        <SecondContainer />
      </div>
  );
}

