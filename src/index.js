
import _ from 'lodash'
import React, { Component } from 'react'; // go find the library called React, install in my application as dependency (installed in the node_modules), and assigned to the variable React
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';

const YOUTUBE_DATA_API_KEY = "AIzaSyA6sKJIgo5mweN7mUszD-PMxppZcqwwbo0";

class App extends Component { // => E-6 Syntax (=>): instead of using the keyword function

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};
		this.videoSearch('Gopro Fusion'); 
	}

	videoSearch(term) {
		YTSearch ({key: YOUTUBE_DATA_API_KEY, term: term }, (videosData) => {
			this.setState({ 
				videos: videosData,
				selectedVideo: videosData[0]
			});
		});
	}

	render() { 

		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300); // 300 in milliseconds

		return ( 
			<div> 
				<SearchBar onSearchTermChange = { videoSearch }/> 
				<VideoDetail video = {this.state.selectedVideo } />
				<VideoList 
				onVideoSelect = { selectedVideo => this.setState({selectedVideo})} // function that manipulates another component
				videos = { this.state.videos } /> 
			</div>
		); 
	}
}

/// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));


//this.SetState({videos}) ---> works only if the key and the var name is the same naming convention

