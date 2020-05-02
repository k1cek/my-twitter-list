import React from 'react';
import styles from './Label.module.scss';

const Label = ({ children }) => (
    <h2 className={styles.h1}>{children}</h2>
)

export default Label;