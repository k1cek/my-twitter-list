import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types'

const Button = ({ children, href, secendary, ...props }) => {

    const coverBtn = secendary ? styles.buttonSecendary : styles.button;

    return (
        <>
            {
                // ternary operator
                href ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={coverBtn}>
                        {children}
                    </a>
                ) : (
                        <button {...props} className={coverBtn}>
                            {children}
                        </button>
                    )
            }
        </>
    )
};

Button.propTypes = {
    children: PropTypes.string,
    href: PropTypes.string,
    secendary: PropTypes.string,
}

export default Button;