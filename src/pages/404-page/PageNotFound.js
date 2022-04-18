import React from 'react';

const PageNotFound = () => {
    return (
        <div className=' d-flex flex-column justify-content-center align-items-center' >
            <div className='titles'>
                <h1 className='section-title'>PAGE NOT FOUND</h1>
            </div >
            <img src="./images/404.jpg" className='w-25' alt="" />
        </div>
    );
};

export default PageNotFound;