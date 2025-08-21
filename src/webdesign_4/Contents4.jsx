import React, { Children, useState } from 'react';
const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};
const Contents4 = () => {
    const [activeTab, setActiveTap] = useState('공지사항');
    const [isNoticePopupOpen, setIsNoticePopupOpen] = useState(false);

    const handleNoticeClick = () => {
        setIsNoticePopupOpen(true);
    };
    return (
        <div className='contents-flexbox'>
            <div className='tab-section'>
                <div className='tabs'>
                    <button onClick={handleNoticeClick} 
                        className={activeTab === '공지사항' ? 'active' : ''}>
                        공지사항
                    </button>
                    <button onClick={() => setActiveTap('갤러리')}
                        className={activeTab === '갤러리' ? 'active' : ''}>
                        갤러리
                    </button>
                </div>
                <div className='tab-content'>
                    {activeTab === '공지사항' ? (
                        <div className='notice-box'>
                          클릭시 팝업창으로 알림
                        </div>
                    ) : (
                        <div className='gallery-box'>
                            클릭시 팝업창으로 알림
                        </div>
                    )}
                </div>
            </div>
            <div className='banner-box'>배너(C.3)</div>
            <div className='link-box'>바로가기(C.4)</div>
            <Popup isOpen={isNoticePopupOpen} onClose={() => setIsNoticePopupOpen(false)}>
                <div className='popup-text'>
                    <h3>공지사항</h3>
                    <p>1. 귀멸의 칼날 예매 시 사영 후, 특전 수령 가능</p>
                    <hr />
                    <p>2. 상영관 1~3번 리클라이너석으로 변경</p>
                    <hr />
                    <p>3. 상영관 6번 공사중</p>
                </div>
            </Popup>
        </div>
    );
};

export default Contents4;