import React, { useState } from 'react';

const Contents4 = () => {
    const [activeTab, setActiveTap] = useState('공지사항');
    return (
        <div className='contents-flexbox'>
            <div className='tab-section'>
                <div className='tabs'>
                    <button onClick={() => setActiveTap('공지사항')}
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
                            공지사항 내용
                        </div>
                    ) : (
                        <div className='gallery-box'>
                            갤러리 내용
                        </div>
                    )}
                </div>
            </div>
            <div className='banner-box'>배너(C.3)</div>
            <div className='link-box'>바로가기(C.4)</div>
        </div>
    );
};

export default Contents4;