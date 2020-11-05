import React from 'react';

class SearchBar extends React.Component {
    // event object is being passed
    // pay attention to the naming convention
    // other naming convention is handleInputChange
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* notice onInputChange is not invoked - the callback function is waiting till there is a change */}
                        {/* different events are paired with different properties - onChange is a property that detects a event when input text is changed */}
                        <input type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;