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
