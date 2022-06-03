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
                      <li><a href="https://www.facebook.com/profile.php?id=100081338277197" target='_blank' rel="noreferrer">Category One</a></li>
                      <li><a href="http://localhost:3000/">Category Two</a></li>
                      <li><a href="http://localhost:3000/">Category Three</a></li>
                  </ul>
              </li>
              <li><a href="https://reactjs.org" className='nav-a' target='_blank' rel="noreferrer">Learn React</a></li>
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
          <a href='https://github.com/jbini' target='_blank' rel="noreferrer">
            <div className='first-link-div1'>
              <div className='first-link-div-img'>
                <img src='./img/slide.jpg' alt='link-1'></img>
              </div>
              <div className='first-link-div-body'>
                <p className='first-link-div-title'>link-1</p>
                this message is test. this message is test. this message is test.
              </div>
            </div>
          </a>
          <a href='https://github.com/jbini' target='_blank' rel="noreferrer">
            <div className='first-link-div'>
              <div className='first-link-div-img'>
                <img src='./img/slide.jpg' alt='link-2'></img>
              </div>
              <div className='first-link-div-body'>
                <p className='first-link-div-title'>link-2</p>
                this message is test. check. this message is test.
              </div>
            </div>
          </a>
          <a href='https://github.com/jbini' target='_blank' rel="noreferrer">
            <div className='first-link-div'>
              <div className='first-link-div-img'>
                <img src='./img/slide.jpg' alt='link-3'></img>
              </div>
              <div className='first-link-div-body'>
                <p className='first-link-div-title'>link-3</p>
                check. this message is test. check. this message is test.
              </div>
            </div>
          </a>
          <a href='https://github.com/jbini' target='_blank' rel="noreferrer">
            <div className='first-link-div'>
              <div className='first-link-div-img'>
                <img src='./img/slide.jpg' alt='link-4'></img>
              </div>
              <div className='first-link-div-body'>
                <p className='first-link-div-title'>link-4</p>
                check. this message is test. this message is test. check. 
              </div>
            </div>
          </a>
          <a href='https://github.com/jbini' target='_blank' rel="noreferrer">
            <div className='first-link-div'>
              <div className='first-link-div-img'>
                <img src='./img/slide.jpg' alt='link-5'></img>
              </div>
              <div className='first-link-div-body'>
                <p className='first-link-div-title'>link-5</p>
                check. check. check. 
              </div>
            </div>
          </a>
          <a href='https://github.com/jbini' target='_blank' rel="noreferrer">
            <div className='first-link-div'>
              <div className='first-link-div-img'>
                <img src='./img/slide.jpg' alt='link-6'></img>
              </div>
              <div className='first-link-div-body'>
                <p className='first-link-div-title'>link-6</p>
                message message test. test. test. 
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className='line-container'>
        <div className='grayline'></div>
      </div>
      <div className='second-container'>
        <div className='third-div'>
          <div className='third-div-box'>
            <h1>Think</h1>
            <div className='third-div-box-circle1'></div>
            <div className='third-div-box-line'></div>
            <p>test message</p>
            <p>what? why where</p>
            <p>check check check</p>
            <a href='https://github.com/jbini' target='_blank' rel="noreferrer">
              <div className='third-div-box-button'>Get in!</div>
            </a>
          </div>
          <div className='third-div-box2'>
            <h1>About</h1>
            <div className='third-div-box-circle2'></div>
            <div className='third-div-box-line'></div>
            <p>what? why where</p>
            <p>check check check</p>
            <p>test message</p>
            <p>another way</p>
            <a href='https://github.com/jbini' target='_blank' rel="noreferrer">
              <div className='third-div-box-button'>Get in!</div>
            </a>
          </div>
          <div className='third-div-box2'>
            <h1>Self</h1>
            <div className='third-div-box-circle3'></div>
            <div className='third-div-box-line'></div>
            <p>remember</p>
            <a href='https://github.com/jbini' target='_blank' rel="noreferrer">
              <div className='third-div-box-button'>Get in!</div>
            </a>
          </div>
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
          github : <a href='https://github.com/jbini' target='_blank' rel="noreferrer">https://github.com/jbini</a>  
        </div>
        <div className='footer-div-menu1'>
          <h2>Menu1</h2>
          <a href='https://github.com/jbini' target='_blank' rel="noreferrer">About link1</a>
          <p></p><a href='https://github.com/jbini' target='_blank' rel="noreferrer">For link2</a>
          <p></p><a href='https://github.com/jbini' target='_blank' rel="noreferrer">Where is link3</a>
          <p></p><a href='https://github.com/jbini' target='_blank' rel="noreferrer">What is link4</a>
        </div>
        <div className='footer-div-menu2'>
          <h2>Menu2</h2>
          <a href='https://github.com/jbini' target='_blank' rel="noreferrer">Is that link5?</a>
          <p></p><a href='https://github.com/jbini' target='_blank' rel="noreferrer">Yes link6</a>
          <p></p><a href='https://github.com/jbini' target='_blank' rel="noreferrer">Thanks link7</a>
        </div>
        <div className='footer-div-icon'>
          <a href='https://www.facebook.com' target='_blank' rel="noreferrer">
            <input type='image' src='./img/facebook2.png' alt='facebook' width={50}></input>
          </a>
          <a href='https://twitter.com' target='_blank' rel="noreferrer">
            <input type='image' src='./img/twitter2.png' alt='twitter' width={50}></input>
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
            <input type='image' src='./img/insta2.png' alt='insta' width={50}></input>
          </a>
        </div>
      </div>
    </div>
    
  );
    
}


export default App;

