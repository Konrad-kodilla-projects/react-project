import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Column.scss';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon';
// import {settings} from '../../data/dataStore';

class Column extends Component {
  // state = {
  //   cards: this.props.cards || [],
  // };

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
    columns: PropTypes.array,
  };

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>

        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}

        {/* 
          <div className={styles.creator}>
            <Creator
              text={settings.cardCreatorText}
              action={title => this.addCard(title)}
            />
          </div> */}
      </section>
    );
  }
}

export default Column;
