import './App.css';
import CurtainContainer from './component/CurtainContainer';
import GrayLine from './component/GrayLine';
import SecondContainer from './component/SecondContainer';
import { useEffect } from "react";


function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function CategoryThree() {
  return (
      <div>
        <ScrollToTop />
        <GrayLine />
        <GrayLine />
        <CurtainContainer />
        <GrayLine />
        <SecondContainer />
      </div>
  );
}

