import '../css/TopButton.css';



export default function TopButton({ handleClick }) {
    

    return(
        <div className='topButton-div' onClick={handleClick}>

            <h3>TOP</h3>
            
            <div className='arrow-up'>
                <img src='./img/arrowup.png' alt='arrowup'/>
            </div>
        </div>
    );
}