import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './List.scss';
import Hero from '../Hero/Hero'
import Column from '../Column/Column'

class List extends Component{
    static propTypes = {
        title: PropTypes.node.isRequired,
        img: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>
    }

    render() {
        const {title, img} = this.props
        return (
            <section className={styles.component}>
                <Hero titleText={title} img={img}/>
                {this.props.children}
                <div className={styles.columns}>
                <Column title='1 test'/>
                <Column title='2 test'/>
                <Column title='3 test'/>
                </div>
            </section>
        )
    }
}

export default List;