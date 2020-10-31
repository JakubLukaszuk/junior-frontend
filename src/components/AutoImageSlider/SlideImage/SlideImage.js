import React from 'react';

const SlideImage = (props) => {
    const {imageName, width, rightLeftPadding} = props;

    const containerStyle = {
        padding: `${rightLeftPadding}px`
    }

    const imageStyle = {
        width: `${width}px`,
        borderRadius: '8px',
        height: 'auto'
    }
    return (
        <div style = {containerStyle}>
            <img style ={imageStyle} src = {`/assets/photos/${imageName}`} alt = "image of dog"/>
        </div>
    )
}

export default SlideImage;