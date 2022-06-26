import '../css/DownList.css';

export default function DownList() {
    return (

        <div className="downlist-container">

            <div className='downlist-div'>
                <input type='radio' name='downlist-redio' id='downlist1' />
                <input type='radio' name='downlist-redio' id='downlist2' />
                <input type='radio' name='downlist-redio' id='downlist3' />
                <input type='radio' name='downlist-redio' id='downlist4' />
                <input type='radio' name='downlist-redio' id='downlist5' />
                <input type='radio' name='downlist-redio' id='downlistoff' />

                <label className='downlist' for='downlist1' id='downlist-list1'>
                    <h3>Down 1</h3>
                    <label className='downlist-close' for='downlistoff'><h2>X</h2></label>
                </label>
                <label className='downlist' for='downlist2' id='downlist-list2'>
                    <h3>Down 2</h3>
                    <label className='downlist-close' for='downlistoff'><h2>X</h2></label>
                </label>
                <label className='downlist' for='downlist3' id='downlist-list3'>
                    <h3>Down 3</h3>
                    <label className='downlist-close' for='downlistoff'><h2>X</h2></label>
                </label>
                <label className='downlist' for='downlist4' id='downlist-list4'>
                    <h3>Down 4</h3>
                    <label className='downlist-close' for='downlistoff'><h2>X</h2></label>
                </label>
                <label className='downlist' for='downlist5' id='downlist-list5'>
                    <h3>Down 5</h3>
                    <label className='downlist-close' for='downlistoff'><h2>X</h2></label>
                </label>
            </div>

        </div>

    );
}