import growUp from '../grow-up.png'
import videogames from '../videogames.jpg'
import tateti from '../tateti.png'
import twclone from '../twclonelogo.png'
import newsHome from '../newsHomepage.jpg'
export default function getProjects(){

    let obj=[
        {
            title:'News Homepage',
            image:newsHome,
            link:"https://news-homepage-liard-chi.vercel.app/",
            description:`Challenge from code-mentor.\n
                           Nice looking, responsive homepage for a news site.\n
                           Made with Js, html & CSS`
        },
        {
            title:'Grow Up Libros',
            image:growUp,
            link:"https://e-commerce-books.vercel.app/",
            description:`Bootcamp's final project. \n At GrowUpLibros we believe that reading can be a powerful tool to achieve personal growth. That's why we are creating an online book store selling philosophy and personal development books, where you'll find the kind of wisdom and encouragement that can help you grow up.`
        },
        {
            title:'Videogames App',
            link:"https://videogames-one.vercel.app/",
            image:videogames,
            description:"Individual project.This  project is an SPA that consumes an API to help you find information about your favorite games and even add new games so they're shown on the page."
        },
        {
            title:'TicTacToe',
            link:"https://tateti-rho.vercel.app/",
            image:tateti,
            description:"tic-tac-toe is a small project built with reactJs with the main features of a classic game of tic-tac-toe with animations and victory counter"
        }
    ]

    return obj;
}