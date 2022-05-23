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
          <div className='first-sl'>
            <input type="radio" name='slide1' id='firstslide01' checked></input>
            <input type="radio" name='slide2' id='firstslide02'></input>
            <input type="radio" name='slide3' id='firstslide03'></input>
            <div className='slidewrap1'>
              <ul className='slidelist1'>
                <li>
                  <a href='http://localhost:3000/'>
                    <img src='img/slide01.jpg' alt='slide'></img>
                  </a>
                </li>
                <li>
                  <a href='http://localhost:3000/'>
                    <img src='img/slide02.jpg' alt='slide'></img>
                  </a>
                </li>
                <li>
                  <a href='http://localhost:3000/'>
                    <img src='img/slide03.jpg' alt='slide'></img>
                  </a>
                </li>
              </ul>
              <div className='first-slide-control'>
                <div className='control01'>
                  <label for='firstslide03' className='slide-left'></label>
                  <label for='firstslide02' className='slide-right'></label>
                </div>
                <div className='control02'>
                  <label for='firstslide01' className='slide-left'></label>
                  <label for='firstslide03' className='slide-right'></label>
                </div>
                <div className='control03'>
                  <label for='firstslide02' className='slide-left'></label>
                  <label for='firstslide01' className='slide-right'></label>
                </div>
              </div>
            </div>
          </div>
          
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
