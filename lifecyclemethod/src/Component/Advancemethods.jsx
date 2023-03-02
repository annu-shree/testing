import { Component } from "react"
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.counter,
        }
    }
    static getDerivedStateFromProps(props, state) {
        return { counter: props.counter }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate", prevProps, prevState);
        return prevProps.counter + 5;
    }
    componentDidUpdate(props, state, snapshot) {
        console.log("componentDidUpdate", snapshot);
    }
    //     shouldComponentUpdate(nextProps,nextState){
    //      console.log("shouldComponentUpdate",nextProps,nextState);
    //      if(nextState.counter<3){
    //         return true;
    //      }
    //      return false;
    //    }
    render() {
        console.log("render");
        return (
            <>
                <h1>{this.state.counter}</h1>
                <h1>Counter Component</h1>
            </>
        )
    }
}
export default Counter; 