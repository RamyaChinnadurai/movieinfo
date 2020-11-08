import React from 'react';
import FavouriteCount from './favouriteCount';
import Logo from './logo';
import Search from './search';
const Header = ({Total}) => {
    console.log(Total);
    return (
        <div className="header">
            <div className="navbar-header">
                <Logo />
            </div>
            <div className="jumbotron">
                <Search />
            </div>
            <div className="favdiv" >
                <FavouriteCount Total={Total} />
            </div>
        </div>
    );

}

export default Header;