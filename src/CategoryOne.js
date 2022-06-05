import logo from './logo.svg';
import './App.css';

function CategoryOne() {
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
                        <li><a href='CategoryOne.js'>Category One</a></li>
                        <li><a href="http://localhost:3000/">Category Two</a></li>
                        <li><a href="http://localhost:3000/">Category Three</a></li>
                    </ul>
                </li>
                <li><a href="https://reactjs.org" className='nav-a' target='_blank' rel="noreferrer">Learn React</a></li>
            </ul>
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
  
  
  export default CategoryOne;