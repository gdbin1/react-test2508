import React from 'react';

const Footer2 = () => {
    return (
        <>
            <div className='footerbox'>
                <table className='footer2-table'>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>
                                <div className='logo2'>로고</div>
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