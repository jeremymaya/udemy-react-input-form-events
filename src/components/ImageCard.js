import React from 'react';

class ImageCard extends React.Component {
    render() {
        // destructuring this.props.image
        const { description, urls } = this.props.image;

        return (
            <div>
                <img
                    src={urls.regular}
                    alt={description}
                />
            </div>
        )
    }
}

export default ImageCard;