import React from 'react';
import qs from 'qs';


const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    
    const showDetail = query.detail === 'true';

    return (
        <div>
            <h1>소개</h1>          
            <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
            {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    );
};

export default About;