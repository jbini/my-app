import './App.css';
import CurtainContainer from './component/CurtainContainer';
import GrayLine from './component/GrayLine';
import SecondContainer from './component/SecondContainer';

export default function CategoryThree() {
  return (
      <div>
        <GrayLine />
        <GrayLine />
        <CurtainContainer />
        <GrayLine />
        <SecondContainer />
      </div>
  );
}

