# udemy-react-input-form-events

---

## Overview

App Challenges:

* Need to get a search term from the user
* Need to use that search term to make a request to an outside API and fetch data
* Need to take the fetched images and show them on the screen in a list

App Components:

* SearchBar - component to handle user inputs
* ImageList - component to handle image rendering

---

## Notes

### Creating Event Handler

* User clicks on something = `onClick`
  * Almost all HTML elements works with `onClick` event
* User changes text in an input = `onChange`
  * A `div` element does not work with `onChange` since the `div` cannot be changed
* User submits a form = `onSubmit`
  * A `div` element does not work with `onChange` since the `div` cannot be submitted

### Uncontrolled vs. Controlled Elements

The **uncontrolled component** stores information inside of a DOM while the **controlled element** stores information inside of a React component and allows for more control.

#### Uncontrolled

```javascript
class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    };
}
```

#### Controlled

```javascript
class SearchBar extends React.Component {
    state = { term: '' };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
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
```

The above controlled element has the following flow:

1. User types input
2. Callback gets invoked
3. We call setState with the new value
4. Component renders
5. Input is told what its value is (coming from state)

### Understanding `this` In Javascript

* What is `this` used for in a class?
  * `this` refers back to the class itself
* How is the value of `this` determined in a function?
  * the value of `this` is is the instance of the function?

Below code results an error as `this` refers to an undefined object.

```javascript
...
    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
...
```

Below code blocks fixes the undefined object error by using Arrow Function.

```javascript
...
    onFormSubmit = e => {
        e.preventDefault();
        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
...
```

```javascript
...
    onFormSubmit() {
        e.preventDefault();
        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={e => this.onFormSubmit(e)} className="ui form">
...
```

### Communicating Child to Parent

Props can be only passed down.

Convert App component into a class based component.

SearchBar invokes a callback to App component to pass the search term

### Fetching Data

The app makes a AJAX request, network request, to [Unsplash API](https://unsplash.com/developers) which will send back a JSON record.

### Axios vs Fetch

For this app, we will be using Axios. There are different AJAX clients we can use to make web requests.

* Axios - standard alone 3rd party package
* Fetch - function built into modern browsers

Since Fetch is a built in function, amount of code being sent is to a browser is slightly smaller than the Axios when making an HTTP request. However, Fetch is more basic and lower level than Axios and may not have all the needed features.
