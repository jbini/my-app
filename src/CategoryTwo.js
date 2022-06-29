import './App.css';
import GrayLine from './component/GrayLine';
import SecondContainer from './component/SecondContainer';
import { useEffect } from "react";
import DownList from './component/DownList';
import Manuscript from './component/Manuscript';


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
        <Manuscript />
        <GrayLine />
        <DownList />
        <GrayLine />
      </div>
  );
}

