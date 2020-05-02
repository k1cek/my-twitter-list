import React from 'react';
import styles from './FormComponent.module.scss';
import Input from './Input/Input';
import Button from '../Button/Button';
import Label from '../Label/Label';

const FormComponent = ({ submitFN }) => (
    <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={submitFN} >
            <Label>Add new twitter account</Label>
            <Input
                name="name"
                label="Name"
                required
                maxLength={20}
            />
            <Input
                name='link'
                label="Twitter Link"
                required
            />
            <Input
                name='image'
                label="Image"
            />
            <Input
                tag="textarea"
                label="Description"
                name="description"
                cols="30"
                rows="10"
            />
            <Button className={styles.button} type='submit'>Add person</Button>
        </form>
    </div>
)

export default FormComponent;