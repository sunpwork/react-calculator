import React from 'react'
import PropTypes from 'prop-types';

const TabPage = (props) => {
    return (
        <h1>{props.calcDisplayValue}</h1>
    );
};

TabPage.propTypes = {
    calcDisplayValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default TabPage;