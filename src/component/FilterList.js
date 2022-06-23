import '../css/FilterList.css'
import { Link } from 'react-router-dom';
import FilterListGrayList1 from './FilterListGrayList1';
import FilterListGrayList from './FilterListGrayList';

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

                    <FilterListGrayList1 listNumber={1} imgName={'car1'} listTitle={'Old car'} subContents={'test message1 test message1 test message1 test message1'} />
                    <FilterListGrayList listNumber={2} imgName={'car2'} listTitle={'Car side'} subContents={'test message2 test message2 test message2 test message2'} />
                    <FilterListGrayList listNumber={3} imgName={'car3'} listTitle={'Car back'} subContents={'test message3 test message3 test message3 test message3'} />
                    <FilterListGrayList listNumber={4} imgName={'car4'} listTitle={'Car front'} subContents={'test message4 test message4 test message4 test message4'} />
                    <FilterListGrayList1 listNumber={5} imgName={'car5'} listTitle={'Black car'} subContents={'test message5 test message5 test message5 test message5'} />
                    <FilterListGrayList listNumber={6} imgName={'car6'} listTitle={'Red car'} subContents={'test message6 test message6 test message6 test message6'} />
                    <FilterListGrayList listNumber={7} imgName={'car7'} listTitle={'Car inside right'} subContents={'test message7 test message7 test message7 test message7'} />
                    <FilterListGrayList listNumber={8} imgName={'car8'} listTitle={'Car inside left'} subContents={'test message8 test message8 test message8 test message8'} />
                    
                </div>

            </div>
            
            
        </div>
    );
}