import React, {Component} from 'react';
import CounterComponent from './CounterComponent';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      toggleComponent : true
    }
  }
  render(){

    return (
      <div style={{padding:'10px'}}>
  
        <h3>This is {this.props.appProperty}</h3>
        
        <button onClick={()=> this.setState({toggleComponent : !this.state.toggleComponent})}> Toggle Component </button>

        {this.state.toggleComponent ? <CounterComponent componentName="Class Component" initialValue={5} /> : ''} 
  
      </div>
    );
  }

}

export default App;