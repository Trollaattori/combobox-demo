import './App.css';
import { Component } from 'react';
import axios from 'axios';
class App extends Component{

constructor (props) {
  super(props)
  this.state = {optionsState: 0, values: {countries: []}}

  this.handleChange = this.handleChange.bind(this);

}

handleChange(event) {
  this.setState({optionsState: parseInt(event.target.value), values: this.state.values});
}

componentDidMount() {
    axios.get(`countries.json`)
    .then(result => {
      if(result.status === 200)
        this.setState({optionsState: this.state.optionsState, values: result.data});
    })
  
}

render() {
  return (
    <div className="App">
      <h1>Country list demo</h1>
      <select name='country' value={this.state.optionsState} onChange={this.handleChange}>
        {this.state.values.countries.map((object, i) => <option key={i} value={i} >{object.country}</option>)}
      </select>
        <p className='capital'>{this.state.values.countries.length ? this.state.values.countries.at(this.state.optionsState).capital : "Could not fetch JSON-file."}</p>
      
    </div>
  );
}

}

export default App;
