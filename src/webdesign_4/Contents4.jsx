import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, children, className }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className={`popup-content ${className}`}>
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
    const [isDiscountPopupOpen, setIsDiscountPopupOpen] = useState(false);
    const [isComboPopupOpen, setIsComboPopupOpen] = useState(false);

    const handleNoticeClick = () => {
        setIsNoticePopupOpen(true);
    };

    const handleDiscountClick = () => {
        setActiveTap('할인혜택');
        setIsDiscountPopupOpen(true);
    };

    const handleComboClick = () => {
        setIsComboPopupOpen(true);
    };

    return (
        <div className='contents-flexbox'>
            <div className='tab-section'>
                <div className='tabs'>
                    <button onClick={handleNoticeClick}
                        className={activeTab === '공지사항' ? 'active' : ''}>
                        공지사항
                    </button>
                    <button onClick={handleDiscountClick}
                        className={activeTab === '할인혜택' ? 'active' : ''}>
                        할인 혜택
                    </button>
                </div>
                <div className='tab-content'>
                    {activeTab === '공지사항' ? (
                        <div className='notice-box'>
                            <p style={{ textAlign: 'center', lineHeight: '120px' }}>클릭 시 팝업창으로 확인 가능</p>
                        </div>
                    ) : (
                        <div className='gallery-box'>
                            <p style={{ textAlign: 'center', lineHeight: '120px' }}>클릭 시 팝업창으로 확인 가능</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='banner-box' onClick={handleComboClick}>
                <div style={{
                    textAlign: 'center'
                }}>
                    콤보 할인 🍿
                </div>
            </div>
            <div className='link-box'>
                <h3>🎬 영화 순위 TOP 5</h3>
                <ol className='top-t-list'>
                    <li>1위 귀멸의 칼날:무한성편</li>
                    <li>2위 어벤져스:인피니티 워</li>
                    <li>3위 트랜스포머</li>
                    <li>4위 분노의 질주</li>
                    <li>5위 좀비딸</li>
                </ol>
            </div>
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
            <Popup isOpen={isDiscountPopupOpen} onClose={() => setIsDiscountPopupOpen(false)}>
                <div className='popup-text'>
                    <h3>할인 혜택</h3>
                    <h4>통신사 할인</h4>
                    <p>SKT: VIP 등급 영화 1편 무료 (연 3회)</p>
                    <p>KT: VIP 등급 본인 포함 2인 3000원 할인</p>
                    <hr />
                    <h4>제휴 카드 할인</h4>
                    <p>KB국민카드: 매월 1회 5,000원 할인</p>
                    <p>신한카드: 매월 2회 3,000원 할인</p>
                </div>
            </Popup>
            <Popup
                isOpen={isComboPopupOpen}
                onClose={() => setIsComboPopupOpen(false)}
                className="popup-combo-background">
                <div className='popup-text'>
                    <h3>🍿 콤보 할인 이벤트</h3>
                    <p>영화 관람의 필수템, 팝콘 콤보를 할인된 가격으로 만나보세요!</p>
                    <hr />
                    <h4>오리지널 팝콘 (L) + 콜라 (M) 2잔</h4>
                    <p style={{ fontWeight: 'bold' }}>정상가 15,000원 → 할인가 13,000원</p>
                </div>
            </Popup>
        </div>
    );
};
export default Contents4;