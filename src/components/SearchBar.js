import React from 'react';

class SearchBar extends React.Component {
    // // event object is being passed
    // // pay attention to the naming convention
    // // other naming convention is handleInputChange
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = { term: '' };

    onFormSubmit = e => {
        e.preventDefault();

        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={e => this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* notice onInputChange is not invoked - the callback function is waiting till there is a change */}
                        {/* different events are paired with different properties - onChange is a property that detects a event when input text is changed */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;