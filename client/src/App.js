import React from 'react';

const App = () => {
    
    return (
        <>
            <div class="header">
                <div class="navbar-header">
                    <a class="navbar-brand" id="title" href="index.html">MOVIBAZAAR</a>
                </div>
                    <div class="jumbotron">
                        <form id="search-form">
                            <input type="text" class="form-control" id="search-text" placeholder="Search For Movies " />
                        </form>
                    </div>
                </div>

                <div class="container">
                <div id="movies" class="row">
                    <div class="container">
                        <div>
                            <img class="object-fit-cover" src="${movie.Poster}" />
                            <h2 class="movie-title" >Inside out <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#DC143C" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></h2>
                            <a class="view-details" target="_blank" >Movie Details</a>
                        </div>
                    </div>
                    <div class="container">
                        <div>
                            <img class="object-fit-cover" src="${movie.Poster}" />
                            <h2 class="movie-title" >Inside out <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#DC143C" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></h2>
                            <a class="view-details" target="_blank" >Movie Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
}
export default App;