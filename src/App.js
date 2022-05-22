import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
      <div className="mainlogo">
        <img src={logo} className="App-logo" alt="logo"  />
      </div>
      <div className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          jbini React
        </a>
        <div className='nav-container'>
          
        </div>
      </div>
      <div className='first-container'>
        <div className='first-div'>
          first
        </div>
        <div className='second-div'>
          second
        </div>
      </div>
      <div className='line-container'>
        <div className='grayline'></div>
      </div>
      <div className='second-container'>
        <div className='third-div'>
        third
        </div>
      </div>
      <div className='footer-container'>
        <div className='footer-div'>
          footer
        </div>
      </div>
    </div>
    
  );
    
}

export default App;
