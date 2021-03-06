import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    // const images = props.images.map((image) => {
    //     // assign the key to the root element - for this use case, it is <img> tag
    //     return <img key={image.id} alt={image.alt_description} src={image.urls.regular} />

    // destructure the above codeblock for readability
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });
    
    return <div className="image-list">{images}</div>;
};

export default ImageList;