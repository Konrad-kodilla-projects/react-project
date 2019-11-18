import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Card.scss';

class Card extends Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
    };

    render(){
      const {title} = this.props;
      return (
        <div className={styles.component}>
          <p>{title}</p>
        </div>
      );
    }
}

export default Card;