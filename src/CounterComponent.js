import React, {Component} from 'react';

class CounterComponent extends Component {

    constructor(props) {
        super(props);
        this.state= {
            initialState : props.initialValue
        };
        this.handleDecrement = this.handleDecrement.bind(this);
        console.log("Constructor")
    }

    componentDidMount() {
        console.log("Mounting Phase");
    }

    componentDidUpdate() {
        console.log('Updating Phase');
    }

    componentWillUnmount() {
        console.log("Unmounting phase");
    }

    handleIncrement = async () => {
        await this.setState({ initialState : this.state.initialState + 1 });
    }

    handleDecrement () {
        console.log(this)
        this.setState({ initialState : this.state.initialState - 1 });
    }

    render() {
        console.log("Render")
        return(
            <div>
                <h3> This is {this.props.componentName} </h3>
                Initial Value : {this.state.initialState} <br/> <br/>
                <button onClick={this.handleIncrement} > Increment</button> &nbsp;
                <button onClick={this.handleDecrement} > Decrement</button>
            </div>
        )
    }
}

export default CounterComponent;
