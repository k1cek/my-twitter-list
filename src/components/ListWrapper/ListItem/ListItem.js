import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';
import Button from "../../Button/Button";
import Label from '../../Label/Label';

const ListItem = ({ image, name, description, twitterLink }) => {

    const ImgTag = image ? 'img' : 'div'; // Ternary Operator, tworze zmienną, która w zależności czy jest IMAGE przyjmie wartość img lub div. Dzieki temu jesli zdjecie nie zostanie dodane, bedzie domyslne takie jakie damy w div css

    return (
        <li className={styles.wrapper}>
            <ImgTag className={image ? styles.image : styles.imageNone} src={image} alt="" />
            <div>
                <Label>{name}</Label>
                <p>{description}</p>
                <Button href={twitterLink}>Visit my Twitter</Button>
            </div>
        </li>
    )
}

// deklarujemy PropsTypes, tworzymy obiekt. Podajemy wszystkie propsy
// dajemy mała litere, poniewaz jest to co innego, bo mówimy o proptypsach zwiazanych z ListItem

ListItem.propTypes = {
    image: PropTypes.string, // deklarujemy typ danych jakich bedziemy uzywać czyli string, a dodatkowo ustawiamy wartosc isRequider oznaczajacy ze element jest wymagany
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
};

// ustawiamy domyślną wartość na wypadek braku wartosci dla danego klucza w tablicy

ListItem.defaultProps = {
    description: 'One of the React creator - PropTypes tu hula :)',
}

export default ListItem;

// (
//     <li>
//         <img src={image} alt="" />
//         <div>
//             <h1>
//                 {name}
//             </h1>
//             <p>{description}</p>
//             <p>{twitterLink}</p>
//         </div>
//     </li>
// )