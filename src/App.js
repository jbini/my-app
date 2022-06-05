import './App.css';
import AppHeaders from './Appheader';
import FirstContainer from './FirstContainer';
import Footer from './Footer';
import SecondContainer from './SecondContainer';


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

