import React, {Component} from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero'

class List extends Component{
    render() {
        return (
            <section className={styles.component}>
                <Hero />
            </section>
        )
    }
}

export default List;