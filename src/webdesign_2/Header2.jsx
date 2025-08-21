import React from 'react';
// import './Web_2.css'
import logoImage from './logo/mylogo.png';
const Header2 = () => {
    return (
        <>
            <header className='header'>
                {/* <div className='logo'> */}
                    <img src={logoImage} alt="로고" style={{width: '80px', height: '80px'}} />
                {/* </div> */}
                <nav>
                    <ul className='main-menu'>
                        <li><a href="#">영화</a>
                            <ul className='sub-menu'>
                                <li><a href="">장르별 추천</a></li>
                                <li><a href="">시대별 추천</a></li>
                                <li><a href="">감독/배우</a></li>
                                <li><a href="">명작 리뷰</a></li>
                            </ul>
                        </li>
                        <li><a href="#">드라마</a>
                            <ul className='sub-menu'>
                                <li><a href="">국내 드라마</a></li>
                                <li><a href="">해외 드라마</a></li>
                                <li><a href="">OTT 시리즈</a></li>
                                <li><a href="">미공개 영싱</a></li>
                            </ul>
                        </li>
                        <li><a href="#">커뮤니티</a>
                            <ul className='sub-menu'>
                                <li><a href="">한 줄 감상평</a></li>
                                <li><a href="">자유 게시판</a></li>
                                <li><a href="">스포일러 토크</a></li>
                                <li><a href="">모임</a></li>
                            </ul>
                        </li>
                        <li><a href="#">상영 정보</a>
                            <ul className='sub-menu'>
                                <li><a href="">상영 중 영화</a></li>
                                <li><a href="">개봉 예정작</a></li>
                                <li><a href="">박스 오피스</a></li>
                                <li><a href="">OTT 서비스</a></li>
                            </ul>
                        </li>
                    </ul >
                </nav>
            </header>
        </>
    );
};

export default Header2;