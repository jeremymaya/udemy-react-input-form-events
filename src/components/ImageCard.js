import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    // accesses the imgage ref
    componentDidMount() {
        // waits for an image to load 
        // and paired up with a callback setSpans
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    };

    render() {
        // destructuring this.props.image
        const { description, urls } = this.props.image;

        // <img> tag here is a JSX tag which will eventually become a JS element
        // ref will contain the image node information
        return (
            <div>
                <img src={urls.regular} alt={description} ref={this.imageRef} />
            </div>
        )
    }
}

export default ImageCard;