import React from 'react';
import styles from './FormComponent.module.scss';
import Input from './Input/Input';
import Button from '../Button/Button';
import Label from '../Label/Label';
import Radio from './Radio/Radio';

const types = { // bezpieczniej jest zdefiniowac const z typami i potem uzyc w state odniesienia. 
    twitter: 'twitter',
    article: 'article',
    note: 'note',
}

const description = {
    twitter: 'favorite twitter account',
    article: 'Article :D ',
    note: 'note :)'
}

class FormComponent extends React.Component {
    state = {
        activeOption: types.twitter,
    }

    // funkcja która bedzie przyjmowac jakiś TYPE ustawiajac activeOption na ten TYPE
    handleOption = (type) => {
        this.setState({
            activeOption: type,
        })
    }

    render() {
        const { activeOption } = this.state;
        return (
            <div className={styles.wrapper}>
                <form
                    autoComplete='off'
                    className={styles.form}
                    onSubmit={this.submitFN} >

                    <Label>Add new {description[activeOption]}</Label>

                    <div className={styles.inputRadio}>
                        <Radio
                            id={types.twitter}
                            // w onChange tworzymy funkcję która zwraca bedzie funkcję, dlatego jest na poczatku ()
                            onChange={() => this.handleOption(types.twitter)} // podajemy funkcję która bedzie odpowiedzialna za zmiane naszego state
                            checked={this.state.activeOption === types.twitter} // kiedy nasz radio button ma byc zaznaczony

                        >twitter</Radio>
                        <Radio
                            id={types.article}
                            // w onChange tworzymy funkcję która zwraca bedzie funkcję, dlatego jest na poczatku ()
                            onChange={() => this.handleOption(types.article)} // podajemy funkcję która bedzie odpowiedzialna za zmiane naszego state
                            checked={activeOption === types.article} // kiedy nasz radio button ma byc zaznaczony
                        >article</Radio>
                        <Radio
                            id={types.note}
                            // w onChange tworzymy funkcję która zwraca bedzie funkcję, dlatego jest na poczatku ()
                            onChange={() => this.handleOption(types.note)} // podajemy funkcję która bedzie odpowiedzialna za zmiane naszego state
                            checked={activeOption === types.note} // kiedy nasz radio button ma byc zaznaczony
                        >note</Radio>
                    </div>
                    <Input
                        name="name"
                        label={activeOption === types.twitter ? 'Twitter Name' : 'Title'}
                        maxLength={30}
                    />
                    {activeOption !== types.note ? <Input
                        name='link'
                        label={activeOption === types.twitter ? 'Twitter Link' : 'Link'}
                    /> : null}

                    {activeOption === types.twitter ? (
                        <Input
                            name='image'
                            label="Image"
                        />) : null}
                    <Input
                        tag="textarea"
                        label="Description"
                        name="description"
                        cols="30"
                        rows="10"
                    />
                    <Button type='submit'>Add person</Button>
                </form>
            </div>
        )
    }

}

export default FormComponent;