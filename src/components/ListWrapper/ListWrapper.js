import React from 'react';
import ListItem from '../ListWrapper/ListItem/ListItem';
import styles from './ListWrapper.module.scss';

const ListWrapper = (props) => (
    <ul className={styles.wrapper}>
        {props.items.map(data => (
            <ListItem key={data.name} {...data} />
        ))}

        {/* pierwsza forma ListItem dłuższa:
            name={data.name}
            description={data.despription}
            image={data.image}
            link={data.twitterLink}
        */}

    </ul>
)


export default ListWrapper;

