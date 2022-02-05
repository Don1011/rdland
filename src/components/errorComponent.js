import React from 'react';

function ErrorComponent({error}) {
    return <div className='gradientCard'>
        <div className="center-container-60 grid" style={{height:'60rem',margin:'0 auto'}}>
            <h2 className='h2 centerText'>{error}</h2>
        </div>
    </div>
}

export default ErrorComponent;