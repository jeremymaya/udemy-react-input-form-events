import '../env';
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
    // initializes a state
    // defaults to an empty array as we are expecting an array of JSON objects
    state = { images: [] };

    // callback function
    // converted into an arrow function to bind the callback
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;
