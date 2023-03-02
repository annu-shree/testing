import React from "react";

class Counter1 extends React.Component{
    render(){
        return(
        
        <div>
            {this.props.count} 
           <div>
           <button onClick={this.props.incrementcounter}> Add Counter </button>
           </div>
           
        </div>
            
            )
           
        
    }
}


export default Counter1;