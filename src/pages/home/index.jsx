import { useEffect, useState } from "react";
import api from "../../utils/api";

import Hero from "./hero";
import Loader from "../../components/loader";
import Error from "../../components/error";
import MovieList from "./movie-list";

 const Home=()=>{

    const [genres,setGenres]=useState(null)
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
        api.get("/genre/movie/list?language=tr")
        .then((res)=>setGenres(res.data.genres))
        .catch((err)=>setError(err.message))
        .finally(()=>setLoading(false))
    },[])
    return (


       <div>
        <Hero/>

        
        {loading ?(<Loader/>) : error ? (<Error info={error} /> ): (genres.map((genre)=>
       < MovieList key={genre.id} genre={genre}/>))}
    

       </div>
    )
 }

 export default Home;