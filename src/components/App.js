import '../env';
import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    // initializes a state
    // defaults to an empty array as we are expecting an array of JSON objects
    state = { images: [] };

    // callback function
    // converted into an arrow function to bind the callback
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
