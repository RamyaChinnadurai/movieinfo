import React, {useState} from 'react';
import {MyContextConsumer} from '../App';

const Search=()=>{
    const [filterValue, setFilterValue] = useState("");
    let changeValue=(e,value)=>{
        setFilterValue(e.target.value);
        value.filter(e.target.value);   
    }
   return(
    <MyContextConsumer>
    {
        (value)=><form id="search-form">
                    <input type="text" onChange={(e) => changeValue(e,value)} value={filterValue} class="form-control" id="search-text" placeholder="Search For Movies " />
                </form>
    }
    </MyContextConsumer>
    
   ) ;
}

export default Search;

