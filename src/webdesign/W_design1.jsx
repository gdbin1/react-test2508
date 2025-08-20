import React from 'react';
import Header from './Header';
import Slide from './Slide'
import Contents from './Contents'
import Footer from './Footer';

const WebDisign1 = () => {
    return (
        <>
            <div style={{ width: '700px', height: '1200px' }}>
                <Header /><hr />
                <Slide /><hr />
                <Contents /><hr />
                <Footer />
            </div >
        </>
    );
};

export default WebDisign1;