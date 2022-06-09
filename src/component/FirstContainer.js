import '../css/FirstContainer.css';

export default function FirstContainer() {
  // window.onload = function () {
  //   var fw = document.getElementById("first-window");
  //   fw.onclick = firstWindow;
  // }
  function firstFunction(fname, fage) {
  };

  const FirstData = {
    fname: "jbini",
    fage: 27
  };
  function firstWindow() {
    alert(FirstData.fname+" "+FirstData.fage);
  };

    return(
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
          <a onClick={() => firstWindow()}>
              <div className='third-div-box-button'>first</div>
            </a>
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
      
    );
}