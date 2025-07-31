import { Minus, Plus, Slash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchList } from "../../redux/actions/listActions";



 const WatchListButton=({movie})=>{

     const {list}=useSelector((store)=>store.listReducer)

     const isAdded=list.find((item)=>item.id === movie.id)

  const dispatch=useDispatch();

  const handleClick=()=>{
    dispatch(toggleWatchList(movie,!isAdded))
  }


    return (

        <div>
       <button onClick={handleClick} className="hero-btn bg-blue-600 hover:cursor-pointer"> 
       {!isAdded ? (<>
       <Plus className="size-5"/> Listeye Ekle 
        </>) : (<>
       <Minus className="size-5"/> Listeden Kaldır
        </>) }
       </button> 
       
             
        </div>
    )
 }
 export default WatchListButton;