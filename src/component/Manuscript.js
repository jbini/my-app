
import '../css/Manuscript.css';


export default function Manuscript() {
  
    return(

        <div className='manuscript-container'>
          <div className='manuscript-div'>
            {/* <img src='./img/waves01.gif' alt='waves1' /> */}
            <video src='./img/waves2.mp4' autoPlay muted loop/>
            <div className='manuscript-box'>
              <div className='manuscript-sub-box'>
                <div className='manuscript-sub1'></div>
                <div className='manuscript-sub2'><h2>T</h2><h3>T</h3></div>
                <div className='manuscript-sub3'><h2>A</h2><h3>A</h3></div>
                <div className='manuscript-sub4'><h2>K</h2><h3>K</h3></div>
                <div className='manuscript-sub5'><h2>E</h2><h3>E</h3></div>
                <div className='manuscript-sub6'></div>
                <div className='manuscript-sub7'><h2>A</h2><h3>A</h3></div>
                <div className='manuscript-sub8'></div>
              </div>
              <div className='manuscript-sub-box'>
                <div className='manuscript-sub9'></div>
                <div className='manuscript-sub10'><h2>M</h2><h3>M</h3></div>
                <div className='manuscript-sub11'><h2>O</h2><h3>O</h3></div>
                <div className='manuscript-sub12'><h2>M</h2><h3>M</h3></div>
                <div className='manuscript-sub13'><h2>E</h2><h3>E</h3></div>
                <div className='manuscript-sub14'><h2>N</h2><h3>N</h3></div>
                <div className='manuscript-sub15'><h2>T</h2><h3>T</h3></div>
                <div className='manuscript-sub16'></div>
              </div>
            </div>
          </div>
        </div>
      
    );
}