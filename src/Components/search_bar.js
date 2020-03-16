// Search Bar Component
import React, { Component } from 'React'; // For component, its still the same thing as const component = React.Component
// defining component

class SearchBar extends Component { // Plain JS Object

	constructor(props) { // define state in a class based components 
		super(props);
		this.state = { term: ''}; // term is an empty string
	}

	render() { // defining methods within a class
		return (
			<div className = "search-bar" > 
				<input 
					value 	 = {this.state.term}
					onChange = { event => this.setState({ term: event.target.value }) } 
				/> 
			</div>
		);
	}
}


export default SearchBar;






/// const SearchBar = () => { // Function
// 	return <input />; // generate HTML input
// }


//functional components do not have state, only class based components do
// All JS classes have a special function called Constructor
// Constructor: first and only function called automatically whenever a new instance of the class is created


//this.state.term = event.target.value ----> Dont do this, BAD!



// 358. Controlled Conponents

// Controlled Component: has its value set by state, so its value only ever changes when the state changes
// 