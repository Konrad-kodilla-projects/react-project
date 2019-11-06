import React from 'react';
import styles from './Hero.scss';

// class Hero extends Component{
//     render() {
//         return (
//             <section className={styles.component}>
//                 <h2>hello test</h2>
//             </section>
//         )
//     }
// }

const Hero = () => (
    <header className={styles.component}>
        <h2 className={styles.title}>Things to do</h2>
        <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"/>
    </header>
);

export default Hero;