import { useState } from "react";



export const AddTodoAction = (todo)=>(dispatch,getState)=>{
    const {Todo:{todos}, }= getState()
    
    const hasTodo = todos.find((i)=>i.todo===todo);

    if(!hasTodo && todo !== ""){
      dispatch({
        type: "ADD_TODO",
        payload:[{id:todo,todo:todo},...todos],
      });
   }
};


export const RemoveTodoAction = (todo)=>(dispatch,getState)=>{
    const {Todo:{todos},}= getState()
    
    dispatch({
        type: "REMOVE_TODO",
        payload:todos.filter((t)=>t.id !== todo.id),
      });
    };

  
    
 
// export const EditTodoAction = (id) =>(dispatch,getstate)=>{
// const { Todo:{todos},} = getstate()

// const EditedItem =todos.find((elem)=>{ if(elem.id===id){
//   return elem = id
//  }
//      return id;
// }
// )
//    dispatch({
//      type:"EDIT_TODO",
//      payload: id
//     });

//   console.log(id)

// };
