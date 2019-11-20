import React from 'react';
import PropTypes from 'prop-types';

import styles from './App.scss';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';
import Container from '../Container/Container';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  };

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Container>
          <Search />
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </Container>
      </main>
    );
  }
}

export default App;
