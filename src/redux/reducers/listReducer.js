import ACTION_TYPES from "../actions/actionTypes";

const initialState={
    isLoading:true,
    error:null,
    list:[]
}


export const listReducer=(state=initialState,{type,payload})=>{

    switch(type){

    case ACTION_TYPES.LIST_LOADING:

    return {...state,isLoading:true};

    case ACTION_TYPES.LIST_ERROR:
        return {...state,isLoading:false,error:payload};

    case ACTION_TYPES.LIST_SUCCESS:
        
    return {...state,isLoading:false,error:null,list:payload}


    case ACTION_TYPES.ADD_TO_LIST:
        const updated=state.list.concat(payload);

    return {...state,list:updated};

    case ACTION_TYPES.REMOVE_FROM_LIST:
        const filtred=state.list.filter((i)=>i.id !== payload.id)

         return {...state,list:filtred};

   

    default:
        return state

    }
   
    
}

export default listReducer