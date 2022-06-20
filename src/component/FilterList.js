import '../css/FilterList.css'
import { Link } from 'react-router-dom';

export default function FilterList() {
    return(
        <div className='filterlist-container'>
            
            <div className='filterlist-sec'>
                <div className='filterlist-filter-div'>

                    <div className='filterlist-filter-check'>
                        <Link to='/'>Gray</Link>
                    </div>
                    <div className='filterlist-filter'>
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

                    
                    <input type='checkbox' id='graylist1' name='listcheck' />
                    <label className='dark-bg' for='graylist1' />
                    <div className='filterlist-large-div'>
                        <div className='filterlist-large-top'>
                            <label for='graylist1'><h2>X</h2></label>
                        </div>
                        <div className='filterlist-large-img' />
                        <div className='filterlist-large-sub'>
                            <h2>This is Tltle</h2>
                            <p>test message test message test message test message</p>
                        </div>
                    </div>

                    <label className='filterlist-list1' for='graylist1'>
                        <div className='filterlist-list-img-div-gray'></div>
                        <div className='filterlist-list-sub-div'>
                            <h2>This is Title</h2>
                            <p>test message test message test message test message</p>
                        </div>
                    </label>
                    <label className='filterlist-list' for='graylist1'>
                    <div className='filterlist-list-img-div-gray'></div>
                        <div className='filterlist-list-sub-div'>
                            <h2>This is Title</h2>
                            <p>test</p>
                        </div>
                    </label>
                    <label className='filterlist-list' for='graylist1'>
                    <div className='filterlist-list-img-div-gray'></div>
                        <div className='filterlist-list-sub-div'>
                            <h2>This is Title</h2>
                            <p>test message test message test message test message test message test message test message test message</p>
                        </div>
                    </label>
                    <label className='filterlist-list' for='graylist1'>
                        <div className='filterlist-list-img-div-gray'></div>
                        <div className='filterlist-list-sub-div'>
                            <h2>This is Title</h2>
                            <p>test</p>
                        </div>
                    </label>
                    <label className='filterlist-list1' for='graylist1'>
                    <div className='filterlist-list-img-div-gray'></div>
                        <div className='filterlist-list-sub-div'>
                            <h2>This is Title</h2>
                            <p>test test message test message test message test message</p>
                        </div>
                    </label>
                    <label className='filterlist-list' for='graylist1'>
                    <div className='filterlist-list-img-div-gray'></div>
                        <div className='filterlist-list-sub-div'>
                            <h2>This is Title</h2>
                            <p>test test message test test message</p>
                        </div>
                    </label>
                    <label className='filterlist-list' for='graylist1'>
                    <div className='filterlist-list-img-div-gray'></div>
                        <div className='filterlist-list-sub-div'>
                            <h2>This is Title</h2>
                            <p>test test message test message test message test message message message message message message message</p>
                        </div>
                    </label>
                
                </div>

            </div>
            
            
        </div>
    );
}