import React from 'react';
import logoImage from './logo/mylogo.png';
const Footer2 = () => {
    return (
        <>
            <div className='footerbox'>
                <table className='footer2-table'>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>
                                <img src={logoImage} alt="로고" style={{ width: '80px', height: '80px' }} />
                            </td>
                            <td>
                                <div className='copyright2'>Copyright</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='sns2'>SNS</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Footer2;