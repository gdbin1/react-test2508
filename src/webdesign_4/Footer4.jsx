import React from 'react';
import logoImage from './logo/logo.png';

const Footer4 = () => {
    return (
        <div className='footerbox'>
            <div className='footer-logo'>
                <img src={logoImage} alt="로고" style={{ width: '80px', height: '80px' }} />
            </div>
            <div className='footer-content'>
                <div className='copyright'>Copyright © 2025 [가빈영화관] All Rights Reserved.</div>
                <div className='sns'>
                    <p>
                        📞 1234-5678 (고객센터) | 운영시간: 09:00 ~ 18:00 (점심시간 제외)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer4;