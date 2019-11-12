import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Card.scss';

class Card extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render(){
        return (
            <div className={styles.component}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Card;