import React,{useState,useEffect} from 'react';
import Header from './component/header';
import MovieList from './component/movielist';

export let MyContext=new React.createContext(0);
export let MyContextProvider=MyContext.Provider;
export let MyContextConsumer=MyContext.Consumer;

let initialList = [];
const App = () => {
    const [movielist,setMovielist]=useState([]);
    const [favCount, setFavCount]=useState(0);
    useEffect(async()=>{
        const res =await fetch('http://localhost:3000/movies');
        const movies=await res.json();
        setMovielist(movies);
        initialList = movies;
        console.log("MovieList :" ,movies);
        let count=0;
        movies.forEach(movie => {
            console.log(movie.imdbID ,movie.Favourite);
            if(movie.Favourite==true){
                console.log(movie.imdbID);
                count++;
            }
        });
        setFavCount(count);
    },[]); 

    let IncreamentFavCount=(count)=>{
        setFavCount(favCount+count);
    }

    let filter=(text)=>{
        let newMovie = initialList.filter((movie)=>movie.Title.toLowerCase().includes(text.toLowerCase()) );
        setMovielist(newMovie)
        console.log("hello" , newMovie);
    }
    let obj={IncreamentFavCount,filter}
    return (
        <>  
            <MyContextProvider value={obj}>
                <Header Total={favCount} />
                <MovieList movielist={movielist}/>
            </MyContextProvider>
            
        </>
    );
}
export default App;