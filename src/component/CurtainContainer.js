import '../css/CurtainContainer.css';

export default function CurtainContainer() {
    return (
        <div className='curtain-container'>
          <div className='curtain-div'>

            <input type='checkbox' name='curtainswitch' id='curtain-open' />

            <div className='curtain-div1'>
              <div className='curtain-div1-left' />
              <div className='curtain-div1-circle' />
              <div className='curtain-div1-sub'>
                <h2>This is Title</h2>
                <p>test message test message test message test message test message test message test message test message test message test message</p>
              </div>
              <div className='curtain-div1-blink' />
              <div className='curtain-div1-right'>
                <h3>FIRST</h3>
              </div>
            </div>

            <div className='curtain-div2'>
              <div className='curtain-div2-left'><h3>SEC</h3></div>
              <div className='curtain-div2-blink2' />
              <div className='curtain-div2-blink' />
              <div className='curtain-div2-sub1'>
                <h2>This is Title</h2>
                <p>test message test message test message test message test message test message test message test message test message test message</p>
              </div>
              <div className='curtain-div2-sub2'>
                <h2>This is Title</h2>
                <p>test message test message test message test message test message test message test message test message test message test message</p>
              </div>
              <div className='curtain-div2-circle' />
              <div className='curtain-div2-right'><h3>OND</h3></div>
            </div>

            <div className='curtain-div3'>
              <div className='curtain-div3-sub'>
                <h2>This is Title</h2>
                <p>test message test message test message test message test message test message test message test message test message test message</p>
              </div>
              <div className='curtain-div3-right' />
              <div className='curtain-div3-left'>
                <h3>THIRD</h3> 
              </div>
              <div className='curtain-div3-circle' />
            </div>

          
          <label for='curtain-open' className='curtain-switch1'>Open</label>
          <label for='curtain-open' className='curtain-switch2'>Close</label>
          </div>
        </div>
    );
}