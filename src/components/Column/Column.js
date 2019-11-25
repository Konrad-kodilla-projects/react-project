import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon';
import { settings } from '../../data/dataStore';

class Column extends Component {
  // state = {
  //   cards: this.props.cards || [],
  // };

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
    columns: PropTypes.array,
    addCard: PropTypes.func,
    id: PropTypes.string,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards, addCard, id } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <Droppable droppableId={id}>
          {provided => (
            <div className={styles.cards} {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;
