import '../css/SecondContainer.css';

export default function SecondContainer() {
    return (
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
              <p>right way</p>
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
    );
}