import logo from '../logo.svg';
import '../css/Appheader.css';

export default function AppHeaders() {
    return (
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
      );
}
