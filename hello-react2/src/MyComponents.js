import React from 'react';
import PropTypes from 'prop-types';

const MyComponents = ({ name, children, favoriteNumber }) => {
    // console.log('props:::::::::', props);
    // const { name, children } = props;
    console.log('name:::::::::', name);
    console.log('children:::::::::', children);
    console.log('favoriteNumber:::::::::', favoriteNumber);
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다.
            <br />
            children 값은 {children}
            입니다.
            <br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    );
};

MyComponents.defaultProps = {
    name: '기본 이름'
};

export default MyComponents;