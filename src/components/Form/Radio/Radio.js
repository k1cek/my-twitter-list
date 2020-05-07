import React from 'react';
import styles from './Radio.module.scss';
import PropTypes from 'prop-types';

const Radio = ({ id, onChange, checked, children }) => (
    <div className={styles.radio}>
        <input
            id={id}
            type="radio" // jaka forma
            onChange={onChange}
            checked={checked}
        />
        <label htmlFor={id}>{children}</label>
    </div>
)

Radio.propTypes = {
    id: PropTypes.string,
    onChange: PropTypes.string,
    checked: PropTypes.string,
    children: PropTypes.string,
}

// Radio.defaultProps = {
//     tag: 'input',
//     maxLength: 200,
// }

export default Radio;

