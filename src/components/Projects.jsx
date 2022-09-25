import React from 'react'
import growUp from '../grow-up.png'
import videogames from '../videogames.jpg'
import tateti from '../tateti.png'
import styles from './Projects.module.css'

export default function Projects(){


    return(
        <div className={styles.background2}>
            <div className={styles.background}>
                <a target='_blank' href="https://e-commerce-books.vercel.app/" className={styles.container}>              
                    <img src={growUp} className={styles.img} />
                    <div className={styles.info}>
                        <h3>Grow Up Libros</h3>
                        <p>Bootcamp's final project.
                        At GrowUpLibros we believe that reading can be a powerful tool to achieve personal growth. That's why we are creating an online book store selling philosophy and personal development books, where you'll find the kind of wisdom and encouragement that can help you grow up.</p>
                    </div>
                </a>
                
                <a target='_blank' href="https://videogames-one.vercel.app/" className={styles.container}>
                <img src={videogames} className={styles.img} />
                    <div className={styles.info}>
                        <h3>Videogames App</h3>
                        <p>Individual project.
                        This  project is an SPA that consumes an API to help you find information about your favorite games and even add new games so they're shown on the page.
                        </p>
                    </div>
                </a>

                <a target='_blank' href="https://tateti-rho.vercel.app/" className={styles.container}>
                <img src={tateti} className={styles.img} />
                    <div className={styles.info}>
                        <h3>Tic-Tac-Toe</h3>
                        <p>Individual project.
                        tic-tac-toe is a small project built with reactJs with the main features of a classic game of tic-tac-toe with animations and victory counter
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}