 
    
const istate = {
    name: "ramu",
    hobby:["eat","code"]
}


const reducer = (state =istate,action)=>{
if(action.type==='CHANGE_NAME'){
    return{
        name:action.payload  
    } 
}

     return state;
}

export default reducer;