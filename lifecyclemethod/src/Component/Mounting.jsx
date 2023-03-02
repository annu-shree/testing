import React from 'react'

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        console.log("constructor")
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
        console.log("componentDidMount",this.state.date);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
        console.log("componentWillUnmount",this.state.date);
    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1> Hello world</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Greeting
