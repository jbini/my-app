import './App.css';
import GrayLine from './component/GrayLine';
import SecondContainer from './component/SecondContainer';
import { useEffect } from "react";


function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function CategoryTwo() {
  return (
      <div>
        <ScrollToTop />
        <GrayLine />
        <SecondContainer />
        <GrayLine />
        <SecondContainer />
      </div>
  );
}

