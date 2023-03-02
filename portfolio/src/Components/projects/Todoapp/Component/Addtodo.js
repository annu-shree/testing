

import React,{Component} from "react";

class  Addtodo extends React.Component{

state={
    todotext:""
}

changetodotext=(event)=>{
    this.setState({
        todotext: event.target.value,
    })
        
    
};


submithandler=(event)=>{
 event.preventDefault();

this.props.addtodotostate(this.state.todotext);

this.setState( {
    todotext:""
})
};

 render(){
   return <div> 
           <form onSubmit={this.submithandler }>
             <input type ="text"
              onChange={this.changetodotext}
              value= {this.state.todotext}/>
             <button type ="submit"> Add </button>
           </form>

   </div> 
       
}
};  

export default Addtodo;