import '../css/FilterList.css'
import { Link } from 'react-router-dom';

export default function FilterListBlue() {
    return(
        <div className='filterlist-container'>
            <div className='filterlist-filter-div'>
                <div className='filterlist-filter'>
                    <Link to='/'>Gray</Link>
                </div>
                <div className='filterlist-filter-check'>
                    <Link to='/blue'>Blue</Link>
                </div>
                <div className='filterlist-filter'>
                    <Link to='/red'>Red</Link>
                </div>
                <div className='filterlist-filter'>
                    <Link to='/yellow'>Yellow</Link>
                </div>
                <div className='filterlist-filter'>
                    <Link to='/green'>Green</Link>
                </div>
            </div>
            <div className='filterlist-div'>
                <div className='filterlist-list1'>
                    <div className='filterlist-list-img-div-blue'></div>
                    <div className='filterlist-list-sub-div'>
                        <h2>This is Title</h2>
                        <p>test message test test test message</p>
                    </div>
                </div>
                <div className='filterlist-list'>
                <div className='filterlist-list-img-div-blue'></div>
                    <div className='filterlist-list-sub-div'>
                        <h2>This is Title</h2>
                        <p>test message test message test message test message test message</p>
                    </div>
                </div>
                <div className='filterlist-list'>
                <div className='filterlist-list-img-div-blue'></div>
                    <div className='filterlist-list-sub-div'>
                        <h2>This is Title</h2>
                        <p>test message test message message test message test message test message</p>
                    </div>
                </div>
                <div className='filterlist-list'>
                    <div className='filterlist-list-img-div-blue'></div>
                    <div className='filterlist-list-sub-div'>
                        <h2>This is Title</h2>
                        <p>test message test message test message test message test message test message test message test message</p>
                    </div>
                </div>
                <div className='filterlist-list1'>
                <div className='filterlist-list-img-div-blue'></div>
                    <div className='filterlist-list-sub-div'>
                        <h2>This is Title</h2>
                        <p>test test message test message test message message message test message</p>
                    </div>
                </div>
                <div className='filterlist-list'>
                <div className='filterlist-list-img-div-blue'></div>
                    <div className='filterlist-list-sub-div'>
                        <h2>This is Title</h2>
                        <p>test test message test test </p>
                    </div>
                </div>
                <div className='filterlist-list'>
                <div className='filterlist-list-img-div-blue'></div>
                    <div className='filterlist-list-sub-div'>
                        <h2>This is Title</h2>
                        <p>test test message test message test message test message message message message message message message message message message</p>
                    </div>
                </div>
                <div className='filterlist-list'>
                <div className='filterlist-list-img-div-blue'></div>
                    <div className='filterlist-list-sub-div'>
                        <h2>This is Title</h2>
                        <p>test test message message message message</p>
                    </div>
                </div>
            </div>
        </div>
    );
}