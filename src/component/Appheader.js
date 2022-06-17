import logo from '../logo.svg';
import '../css/Appheader.css';
import { Link } from 'react-router-dom';

export default function AppHeaders() {
    return (
        <div className="App-header">
            <div className='logo-flex'>
            <img src={logo} className="App-logo" alt="logo"  />
            <Link
                className="App-link"
                to='/'
                rel="noopener noreferrer"
            >
                jbini React
            </Link>
            </div>
            <div className='nav-container'>
            <ul>
                <li><Link to="/" className='nav-a'>Home</Link></li>
                <li> <Link to="/" className='nav-a'>Categories</Link>
                    <ul>
                        <li><Link to='/categoryone'>Category One</Link></li>
                        <li><Link to='/categorytwo'>Category Two</Link></li>
                        <li><Link to="/categorythree">Category Three</Link></li>
                    </ul>
                </li>
                <li><a href="https://reactjs.org" className='nav-a' target='_blank' rel="noreferrer">Learn React</a></li>
            </ul>
            </div>
        </div>
      );
}
