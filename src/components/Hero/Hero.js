import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        <img
            className={styles.image}
            src={props.img}
        />
    </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired
};

export default Hero;
