import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

import styles from './Card.scss';

const Card = props => {
  const { title, search } = props;
  let desc = '';

  if (search) {
    const { column, list } = props;
    desc = (
      <div>
        <p>List: {ReactHtmlParser(list.title)}</p>
        <p>Column: {column.title}</p>
        <Link to={`/list/${list.id}`}>link</Link>
      </div>
    );
  }
  return (
    <div className={styles.component}>
      <p>{title}</p>
      {desc}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  column: PropTypes.object,
  list: PropTypes.object,
  search: PropTypes.bool,
};

export default Card;
