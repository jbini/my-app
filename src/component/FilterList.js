import '../css/FilterList.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FilterListGrayList1 from './FilterListGrayList1';
import FilterListGrayList from './FilterListGrayList';

export default function FilterList() {

    // const title1 = 'This is Title1';
    // const title2 = 'This is Title2';
    // const title3 = 'This is Title3';
    // const title4 = 'This is Title4';
    // const title5 = 'This is Title5';
    // const title6 = 'This is Title6';
    // const title7 = 'This is Title7';
    // const title8 = 'This is Title8';
    let [listTitle,listTitleChange] = useState([]);
    
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

                    <FilterListGrayList1 listNumber={1} subContents={'test message1 test message1 test message1 test message1'} />
                    <FilterListGrayList listNumber={2} subContents={'test message2 test message2 test message2 test message2'} />
                    <FilterListGrayList listNumber={3} subContents={'test message3 test message3 test message3 test message3'} />
                    <FilterListGrayList listNumber={4} subContents={'test message4 test message4 test message4 test message4'} />
                    <FilterListGrayList1 listNumber={5} subContents={'test message5 test message5 test message5 test message5'} />
                    <FilterListGrayList listNumber={6} subContents={'test message6 test message6 test message6 test message6'} />
                    <FilterListGrayList listNumber={7} subContents={'test message7 test message7 test message7 test message7'} />
                    <FilterListGrayList listNumber={8} subContents={'test message8 test message8 test message8 test message8'} />
                    
                </div>

            </div>
            
            
        </div>
    );
}