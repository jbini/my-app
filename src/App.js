import './App.css';
import AppHeaders from './component/Appheader';
import FirstContainer from './component/FirstContainer';
import Footer from './component/Footer';
import SecondContainer from './component/SecondContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default function App() {
  
  window.onload = function () {
    var fw = document.getElementById("first-window");
    fw.onclick = firstWindow;
  }
  function firstWindow() {
    alert("first window open");
  };
  
  return (
    <BrowserRouter>
      <div className="App" >
        <AppHeaders />
        
          <FirstContainer />
          <div className='line-container'>
            <div className='grayline'></div>
          </div>
          <SecondContainer />
        
        <Footer />
      </div>
    </BrowserRouter>
  );
    
}

