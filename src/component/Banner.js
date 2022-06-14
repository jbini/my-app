
import '../css/Banner.css';


export default function Banner() {
  
    return(
        <div className='banner-container'>
        <div className='banner-div'>
          <div className='banner-btn'>
            <input type='radio' name='slide-radio' id='banner-btn1'></input>
            <input type='radio' name='slide-radio' id='banner-btn2'></input>
            <input type='radio' name='slide-radio' id='banner-btn3'></input>
            <div className='banner-slide'>
              <div className='banner-slide-div'>
                <label for='banner-btn3' className='left'></label>
                <img src='./img/slide01.jpg' alt='slide01'></img>
                <label for='banner-btn2' className='right'></label>
              </div>
              <div className='banner-slide-div'>
                <label for='banner-btn1' className='left'></label>
                <img src='./img/slide02.jpg' alt='slide01'></img>
                <label for='banner-btn3' className='right'></label>
              </div>
              <div className='banner-slide-div'>
                <label for='banner-btn2' className='left'></label>
                <img src='./img/slide03.jpg' alt='slide01'></img>
                <label for='banner-btn1' className='right'></label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}