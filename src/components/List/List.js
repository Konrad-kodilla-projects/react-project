import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { DragDropContext } from 'react-beautiful-dnd';

import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';

import { settings } from '../../data/dataStore';

class List extends Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
    moveCard: PropTypes.func.isRequired,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  moveCardHandler = result => {
    if(
      result.destination
      &&
      (
        result.destination.index != result.source.index
        ||
        result.destination.droppableId != result.source.droppableId
      )
    ){
      this.props.moveCard({
        id: result.draggableId,
        dest: {
          index: result.destination.index,
          columnId: result.destination.droppableId,
        },
        src: {
          index: result.source.index,
          columnId: result.source.droppableId,
        },
      });
    }
  };

  render() {
    const { title, image, description, columns, addColumn } = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} img={image} />
        {ReactHtmlParser(description)}
        <div className={styles.columns}>
          <DragDropContext onDragEnd={this.moveCardHandler}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </DragDropContext>
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
        </div>
      </section>
    );
  }
}

export default List;
