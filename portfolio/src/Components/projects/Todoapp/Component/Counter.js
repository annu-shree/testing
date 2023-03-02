import React, {Component} from "react";
import Counter1 from "./counter1";

class Counter extends Component {
 constructor(){
  super(); 

  this.state ={
    count :0,
  };

  this.incrementcounter = this.incrementcounter.bind(this);
 }

incrementcounter(){
    let count =this.state.count;
    this.setState({
        count : ++count,
    })
}
 

    render() {
        return(  
        <div className="counter">
            <Counter1
            count={this.state.count}
            incrementcounter= {this.incrementcounter}></Counter1>
        </div>
        )
    }
}

export default Counter; 