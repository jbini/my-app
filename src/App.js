import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App" >
      
      <div className="App-header">
        <div className='logo-flex'>
          <img src={logo} className="App-logo" alt="logo"  />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            jbini React
          </a>
        </div>
        <div className='nav-container'>
          <ul>
              <li><a href="http://localhost:3000/">Home</a></li>
              <li> <a href="http://localhost:3000/">Categories</a>
                  <ul>
                      <li><a href="http://localhost:3000/">Category One</a></li>
                      <li><a href="http://localhost:3000/">Category Two</a></li>
                      <li><a href="http://localhost:3000/">Category Three</a></li>
                  </ul>
              </li>
              <li><a href="http://localhost:3000/">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className='first-container'>
        <div className='first-div'>
        
          
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
