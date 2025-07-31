import ACTION_TYPES from "./actionTypes";
import api from "../../utils/api"

const toggleWatchList=(movie,isAdd)=>(dispatch)=>{

    const body={
        media_type:"movie",
        media_id:movie.id,
        watchlist:isAdd
    }

    api.post(`account/22180601/watchlist`,body)
    .then((res)=>{
        isAdd ? dispatch({type:ACTION_TYPES.ADD_TO_LIST,payload:movie})
        :dispatch({type:ACTION_TYPES.REMOVE_FROM_LIST,payload:movie})
    })
}

const getWatchList=()=>(dispatch)=>{
   
    dispatch({type:ACTION_TYPES.LIST_LOADING})



    api.get(`/account/22180601/watchlist/movies`)
    .then((res)=>dispatch({type:ACTION_TYPES.LIST_SUCCESS,payload:res.data.results}))
    .catch((err)=>dispatch({type:ACTION_TYPES.LIST_ERROR,payload:err.message}))
}

export {toggleWatchList,getWatchList}