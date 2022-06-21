import '../css/FilterList.css'
import { useState } from 'react';
import styled from "styled-components";

export default function FilterListGrayList(props) {
    
    let setNumber = props.listNumber;

    return (

        <div className='filterlist-list-div'>

            <input type='checkbox' id={'graylist'+setNumber} name='listcheck' />
            <label className='dark-bg' for={'graylist'+setNumber} />

            <div className='filterlist-large-div'>
                <div className='filterlist-large-top'>
                    <label for={'graylist'+setNumber}><h2>X</h2></label>
                </div>
                <div className='filterlist-large-img' />
                <div className='filterlist-large-sub'>
                    <h2>This is Title {props.listNumber}</h2>
                    <p>{props.subContents}</p>
                </div>
            </div>

            <label className='filterlist-list' for={'graylist'+setNumber}>
                <div className='filterlist-list-img-div-gray'></div>
                <div className='filterlist-list-sub-div'>
                    <h2>This is Title {props.listNumber}</h2>
                    <p>{props.subContents}</p>
                </div>
            </label>

        </div>
    );
}