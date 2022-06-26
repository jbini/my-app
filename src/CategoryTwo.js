import './App.css';
import GrayLine from './component/GrayLine';
import SecondContainer from './component/SecondContainer';
import { useEffect } from "react";
import DownList from './component/DownList';


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
        <GrayLine /><GrayLine />
        <SecondContainer />
        <GrayLine />
        <DownList />
        <GrayLine />
        <SecondContainer />
      </div>
  );
}

