import logo from './logo.svg';
import './App.css';

// document.querySelector('.first-slide-btn1').addEventListener('click', function(){
//   document.querySelector('.first-slide').style.transform = 'translate(-0px)';
// });
// document.querySelector('.first-slide-btn2').addEventListener('click', function(){
//   document.querySelector('.first-slide').style.transform = 'translate(-785px)';
// });
// document.querySelector('.first-slide-btn3').addEventListener('click', function(){
//   document.querySelector('.first-slide').style.transform = 'translate(-1570px)';
// });

function App() {
  return (
    <div className="App" >
      <div className="App-header">
        <div className='logo-flex'>
          <img src={logo} className="App-logo" alt="logo"  />
          <a
            className="App-link"
            href="http://localhost:3000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            jbini React
          </a>
        </div>
        <div className='nav-container'>
          <ul>
              <li><a href="http://localhost:3000/" className='nav-a'>Home</a></li>
              <li> <a href="http://localhost:3000/" className='nav-a'>Categories</a>
                  <ul>
                      <li><a href="https://www.facebook.com/profile.php?id=100081338277197">Category One</a></li>
                      <li><a href="http://localhost:3000/">Category Two</a></li>
                      <li><a href="http://localhost:3000/">Category Three</a></li>
                  </ul>
              </li>
              <li><a href="https://reactjs.org" className='nav-a'>Learn React</a></li>
          </ul>
        </div>
      </div>
      <div className='first-container'>
        <div className='first-div'>
          <div className='first-slide-btn'>
            <input type='radio' name='slide-radio' id='first-slide-btn1'></input>
            <input type='radio' name='slide-radio' id='first-slide-btn2'></input>
            <input type='radio' name='slide-radio' id='first-slide-btn3'></input>
            <div className='first-slide'>
              <div className='first-slide-div'>
                <label for='first-slide-btn3' className='left'></label>
                <img src='./img/slide01.jpg' alt='slide01'></img>
                <label for='first-slide-btn2' className='right'></label>
              </div>
              <div className='first-slide-div'>
                <label for='first-slide-btn1' className='left'></label>
                <img src='./img/slide02.jpg' alt='slide01'></img>
                <label for='first-slide-btn3' className='right'></label>
              </div>
              <div className='first-slide-div'>
                <label for='first-slide-btn2' className='left'></label>
                <img src='./img/slide03.jpg' alt='slide01'></img>
                <label for='first-slide-btn1' className='right'></label>
              </div>
            </div>
          </div>
          <div className='first-div-list'>
            first
          </div>
        </div>
        <div className='second-div'>
          <div className='first-link-div'></div>
          <div className='first-link-div'></div>
          <div className='first-link-div'></div>
          <div className='first-link-div'></div>
          <div className='first-link-div'></div>
          <div className='first-link-div'></div>
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
          <a href='http://localhost:3000/' className='footer-title'>jbini React</a><br></br>
          jongbin's React practice page <br></br>
          test message for check test message for check <br></br>
          for check test message test message <br></br><br></br>
          phone : +82) 1233-5567<br></br>
          email : jbini05@gmail.com<br></br>
          github : <a href='https://github.com/jbini'>https://github.com/jbini</a>  
        </div>
        <div className='footer-div-icon'>
        {/* <img src='./img/facebook2.png' alt='facebook' width={50}></img> ..
        <img src='./img/twitter2.png' alt='twitter' width={50}></img> ..
        <img src='./img/insta2.png' alt='insta' width={50}></img>  */}
        <a href='https://www.facebook.com' target='_blank' rel="noreferrer">
          <input type='image' src='./img/facebook2.png' alt='facebook' width={50}></input>
        </a>..
        <a href='https://twitter.com' target='_blank' rel="noreferrer">
          <input type='image' src='./img/twitter2.png' alt='twitter' width={50}></input>
        </a>..
        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
          <input type='image' src='./img/insta2.png' alt='insta' width={50}></input>
        </a>..
        </div>
      </div>
    </div>
    
  );
    
}


export default App;

