import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
      <div className='grayline'></div>
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
      </div>
      <div className='grayline'></div>
      <div className='first-div'>
      1. 터미널에 create-react-app (생성 폴더 이름) 명령어 사용 <br></br>
      2. 터미널에 cd (생성 폴더 이름) 명령어로 폴더로 들어가기 <br></br>
      3. ㅌ

      </div>
    </div>
    
  );
    
}

export default App;
