import React, { useState } from 'react';
import './Web_3.css';

const Contents3 = () => {
    const [activeTab, setActiveTap] = useState('공지사항')
    return (
        <>
            <div className='contents-flexbox'>
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
                        <div className='content-box'>
                            공지사항 내용ㅇㅇㅇ
                        </div>
                    ) : (
                        <div className='content-box'>
                            갤러리 내요오오옹
                        </div>
                    )}
                </div>


                {/* <div className='content-box'>공지사항(C.1)/갤러리(C.2)</div> */}
                <div className='content-box'>배너(C.3)</div>
                <div className='content-box'>바로가기(C.4)</div>
            </div>
        </>
    );
};

export default Contents3;