import React, { useState } from 'react';
import FavouriteIcon from './FavouriteIcon';

const MyFavourites = ({style}) => {
    const [ count, setCount ] = useState(0);
    return (
        <span style={style}>
           <p style={{ display:'inline',fontSize: 18, fontWeight: 'bold', marginRight: 5}}>My Favourites</p>
           <FavouriteIcon status={true} style={{verticalAlign: 'bottom'}}/>
           <p style={{ display:'inline',fontSize: 18, fontWeight: 'bold', marginLeft: 3}}>{count}</p>
        </span>
    )
};

export default MyFavourites;