import React, { useState } from 'react';

const Header3 = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    return (
        <div className="left-nav">
            <div className="logo-section">로고</div>
            <div
                className="menu-section"
                // 서브메뉴의 부모 요소에 position: relative; 가 적용되었는지 확인
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveMenu('menu1')}
                onMouseLeave={() => setActiveMenu(null)}
            >
                MENU1
                {activeMenu === 'menu1' && (
                    <div className="submenu">
                        <div className="submenu-item">submenu1</div>
                        <div className="submenu-item">submenu2</div>
                        <div className="submenu-item">submenu3</div>
                        <div className="submenu-item">submenu4</div>
                    </div>
                )}
            </div>
            <div
                className="menu-section"
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveMenu('menu2')}
                onMouseLeave={() => setActiveMenu(null)}
            >
                MENU2
                {activeMenu === 'menu2' && (
                    <div className="submenu">
                        <div className="submenu-item">submenu1</div>
                        <div className="submenu-item">submenu2</div>
                        <div className="submenu-item">submenu3</div>
                        <div className="submenu-item">submenu4</div>
                    </div>
                )}
            </div>
            <div
                className="menu-section"
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveMenu('menu3')}
                onMouseLeave={() => setActiveMenu(null)}
            >
                MENU3
                {activeMenu === 'menu3' && (
                    <div className="submenu">
                        <div className="submenu-item">submenu1</div>
                        <div className="submenu-item">submenu2</div>
                        <div className="submenu-item">submenu3</div>
                        <div className="submenu-item">submenu4</div>
                    </div>
                )}
            </div>
            <div
                className="menu-section"
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveMenu('menu4')}
                onMouseLeave={() => setActiveMenu(null)}
            >
                MENU4
                {activeMenu === 'menu4' && (
                    <div className="submenu">
                        <div className="submenu-item">submenu1</div>
                        <div className="submenu-item">submenu2</div>
                        <div className="submenu-item">submenu3</div>
                        <div className="submenu-item">submenu4</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header3;