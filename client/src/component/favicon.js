
import React, { useState, useEffect } from 'react'
import {MyContextConsumer} from '../App';

export default function FavIcon({ obj }) {
    

    let { Favourite, imdbID } = obj;
    //const [fillme, SetFillme] = useState("#000000");
    const [isfav, SetIsfav] = useState(Favourite);
    function fun(id,value) {
        console.log(value.IncreamentFavCount);
        if(!isfav){
            value.IncreamentFavCount(1);
        }else{
            value.IncreamentFavCount(-1);
        }

        console.log(id);
        SetIsfav(!isfav);
        fetch(`http://localhost:3000/movies/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                Favourite: !isfav
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then(() => {
                console.log("Sync to DB")
            })
            .catch(err => console.log(err));
            
    }
    return (

        <MyContextConsumer>
        {
            (value)=><svg onClick={() => fun(imdbID,value)} id={imdbID} data-favourite={isfav == true && isfav != undefined ? true : false} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#DC143C" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={isfav == true && isfav != undefined ? "feather feather-heart favourite-on" : "feather feather-heart favourite-off"}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        }
        </MyContextConsumer>

    )
}
