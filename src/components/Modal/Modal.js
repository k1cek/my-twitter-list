import React from 'react';
import styles from './Modal.module.scss';
import FormComponent from '../Form/FormComponent';
import closeBtn from '../../assets/images/closeModal.svg';

const Modal = ({ close, addElement }) => (
    <div className={styles.wrapper}>
        <img onClick={close} className={styles.closeBtn} src={closeBtn} alt="Close button" />
        <FormComponent submitFN={addElement} />
    </div>
)

export default Modal;