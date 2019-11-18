import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import Creator from '../Creator/Creator';

import { settings } from '../../data/dataStore';

class List extends Component {
    state = {
        columns: this.props.columns || []
    };

    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array
    };

    static defaultProps = {
        description: settings.defaultListDescription
    };

    addColumn(title) {
        this.setState(state => ({
            columns: [
                ...state.columns,
                {
                    key: state.columns.length
                        ? state.columns[state.columns.length - 1].key + 1
                        : 0,
                    title,
                    icon: 'list-alt',
                    cards: []
                }
            ]
        }));
    }

    render() {
        const { title, image } = this.props;
        return (
            <section className={styles.component}>
                <Hero titleText={title} img={image} />
                {this.props.description}
                <div className={styles.columns}>
                    {this.state.columns.map(({ key, ...columnProps }) => (
                        <Column key={key} {...columnProps} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator
                        text={settings.columnCreatorText}
                        action={title => this.addColumn(title)}
                    />
                </div>
            </section>
        );
    }
}

export default List;
