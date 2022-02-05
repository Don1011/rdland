import React from 'react';

const GradientCard = (props) => {
    return (
        <div className='gradientCard'>
            {props.children}
        </div>
    );
};

export default GradientCard;