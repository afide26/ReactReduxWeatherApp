import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term:''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault();

    // We need to go and fetch the weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }
  render(){
    return(
      <div>
        <h1><img id="react-logo" src="https://facebook.github.io/react/img/logo.svg" alt="React-Logo"/> React and <img id="redux-logo" src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" alt="Redux Logo"/> Redux Weather App</h1>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            className="form-control"
            placeholder="Get a five-day forecast on your favourite cities"
            value={this.state.term}
            onChange = {this.onInputChange}
            />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Search</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
