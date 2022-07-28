import React from 'react'
import growUp from '../grow-up.png'
import videogames from '../videogames.jpg'
import styles from './Projects.module.css'

export default function Projects(){


    return(
        <div className={styles.background2}>
            <div className={styles.background}>
                <a target='_blank' href="https://e-commerce-books.vercel.app/" className={styles.container}>              
                    <img src={growUp} className={styles.img} />
                    <div className={styles.info}>
                        <h3>Grow Up Libros</h3>
                        <p>Proyecto final del bootcamp SoyHenry.
                            Pagina desarrollada junto a un equipo de otros 6 desarrolladores, se trata de un E-commerce de libros enfocados a filosofia y crecimiento personal.</p>
                    </div>
                </a>
                
                <a target='_blank' href="https://videogames-one.vercel.app/" className={styles.container}>
                <img src={videogames} className={styles.img} />
                    <div className={styles.info}>
                        <h3>Videogames App</h3>
                        <p>Proyecto individual.
                            SPA donde puedes encontrar toda la informacion de tus juegos favoritos e incluso agregar nuevos videojuegos para que se muestren en la pagina
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}