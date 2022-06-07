import '../css/Footer.css'

export default function Footer() {
    return (
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
    );
}