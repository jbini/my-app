import '../css/FilterList.css'

export default function FilterListGrayList1(props) {
    
    let setNumber = props.listNumber;
    let setImgName = props.imgName;
    
    return (
        
        <div className='filterlist-list-div'>

            <input type='checkbox' id={'graylist'+setNumber} name='listcheck' />
            <label className='dark-bg' for={'graylist'+setNumber} />

            <div className='filterlist-large-div'>
                <div className='filterlist-large-top'>
                    <label for={'graylist'+setNumber}><h2>X</h2></label>
                </div>
                <div className='filterlist-large-img'>
                    <img src={'./img/'+setImgName+'.jpg'} alt={setImgName} />
                </div>
                <div className='filterlist-large-sub'>
                    <h2>This is Title {props.listNumber}</h2>
                    <p>{props.subContents}</p>
                </div>
            </div>

            <label className='filterlist-list1' for={'graylist'+setNumber}>
                <div className='filterlist-list-img-div-gray'>
                    <img src={'./img/'+setImgName+'.jpg'} alt={setImgName} />
                </div>
                <div className='filterlist-list-sub-div'>
                    <h2>This is Title {props.listNumber}</h2>
                    <p>{props.subContents}</p>
                </div>
            </label>

        </div>
    );
}