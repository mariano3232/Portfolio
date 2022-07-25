import React from 'react'
import growUp from '../grow-up.png'
import videogames from '../videogames.jpg'
import styles from './Projects.module.css'

export default function Projects(){


    return(
        <div className={styles.background2}>
            <div className={styles.background}>
                <div className={styles.container}>
                    <img src={growUp} className={styles.img} />
                    <div className={styles.info}>
                        <h3>Grow Up Libros</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sunt numquam dolor deleniti culpa perspiciatis earum ab veritatis asperiores eveniet. Architecto minima consectetur rerum explicabo non accusantium voluptatum minus earum?</p>
                    </div>
                </div>
                <div className={styles.container}>
                <img src={videogames} className={styles.img} />
                    <div className={styles.info}>
                        <h3>Videogames App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sunt numquam dolor deleniti culpa perspiciatis earum ab veritatis asperiores eveniet. Architecto minima consectetur rerum explicabo non accusantium voluptatum minus earum?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}