import './App.css';
import AppHeaders from './component/Appheader';
import FirstContainer from './component/FirstContainer';
import Footer from './component/Footer';
import SecondContainer from './component/SecondContainer';


export default function App() {
  return (
    <div className="App" >
      <AppHeaders />
      <FirstContainer />
      <div className='line-container'>
        <div className='grayline'></div>
      </div>
      <SecondContainer />
      
      <Footer />
    </div>
  );
    
}

