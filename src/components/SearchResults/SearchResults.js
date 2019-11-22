import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchResults.scss';
import Card from '../Card/Card';
import Icon from '../Icon';
import { settings } from '../../data/dataStore';

class SearchResults extends Component {

  static propTypes = {
    cards: PropTypes.array.isRequired,
    changeSearchString: PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.changeSearchString();
  }

  render() {
    const { cards } = this.props;
    const {defaultText: title, icon} = settings.search;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>

        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} search={true}/>
        ))}

      </section>
    );
  }
}

export default SearchResults;
