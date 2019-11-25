import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import styles from './Card.scss';

const Card = props => {
  const { title, search, id, index } = props;
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
    <Draggable draggableId={id} index={index}>
      {provided => (
        <article
          className={styles.component}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <p>{title}</p>
          {desc}
        </article>
      )}
    </Draggable>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  column: PropTypes.object,
  list: PropTypes.object,
  search: PropTypes.bool,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Card;
