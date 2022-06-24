import './App.css';
import FirstContainer from './component/FirstContainer';
import GrayLine from './component/GrayLine';
import SecondContainer from './component/SecondContainer';
import { useEffect } from "react";


function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function CategoryOne() {
  return (
      <div>
        <ScrollToTop />
        <FirstContainer />
        <GrayLine />
        <SecondContainer />
        <GrayLine />
        <SecondContainer />
      </div>
  );
}

