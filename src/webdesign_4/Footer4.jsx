import React from 'react';
import logoImage from './logo/logo.png';

const Footer4 = () => {
    return (
        <div className='footerbox'>
            <div className='footer-logo'>
                <img src={logoImage} alt="로고" style={{ width: '80px', height: '80px' }} />
            </div>
            <div className='footer-content'>
                <div className='copyright'>Copyright</div>
                <div className='sns'>SNS</div>
            </div>
        </div>
    );
};

export default Footer4;