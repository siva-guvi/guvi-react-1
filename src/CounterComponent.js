import React, {Component} from 'react';
import SimpleCard from './Cards'

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
        console.log(this.props)
        return(
            <div>
                <h3> This is {this.props.componentName} </h3>
                <SimpleCard subheading="Counter Application" heading="Class Component" 
                    description="Along with Counter Application this component contains Increment in Parent which will Increment the data from Child to Parent Component"/> <br/>
                Initial Value : {this.state.initialState} <br/> <br/>
                <button onClick={this.handleIncrement} > Increment</button> &nbsp;
                <button onClick={this.handleDecrement} > Decrement</button> &nbsp;
                <button onClick={() => this.props.handleIncrement(5)} > Increment in Parent </button>
            </div>
        )
    }
}

export default CounterComponent;
