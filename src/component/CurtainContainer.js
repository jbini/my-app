import '../css/CurtainContainer.css'

export default function CurtainContainer() {
    return (
        <div className='curtain-container'>
          <div className='curtain-div'>
            <div className='curtain-div1'>
              <div className='curtain-div1-left' />
              <div className='curtain-div1-circle'></div>
              <div className='curtain-div1-sub'>
                <h2>This is Title</h2>
                <p>test message test message test message test message test message test message test message test message test message test message</p>
              </div>
              <div className='curtain-div1-blink'></div>
              <div className='curtain-div1-right'>
                <p>First</p>
              </div>
            </div>
            <div className='curtain-div2'></div>
            <div className='curtain-div3'></div>
          </div>
        </div>
    );
}