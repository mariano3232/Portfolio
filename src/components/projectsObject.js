import growUp from '../assets/ProjectImage/grow-up.png'
import tateti from '../assets/ProjectImage/tateti.png'
import countries from '../assets/ProjectImage/countries.jpg'
import newsHome from '../assets/ProjectImage/newsHomepage.jpg'
export default function getProjects(){

    let obj=[
        {
            title:'Where in the world',
            link:"https://where-in-the-world-lyart.vercel.app/",
            repo:"https://github.com/mariano3232/Where-In-the-world",
            image:countries,
            description:"Responsive single sage aplication consuming the REST Countries API, made with React "
        },
        {
            title:'News Homepage',
            image:newsHome,
            link:"https://news-homepage-liard-chi.vercel.app/",
            repo:"https://github.com/mariano3232/newsHomepage",
            description:`Challenge from Frontend Mentor.\n
                           Nice looking, responsive homepage for a news site.\n
                           Made with Js, html & CSS`
        },
        {
            title:'Grow Up Libros',
            image:growUp,
            link:"https://e-commerce-books.vercel.app/",
            repo:"https://github.com/mariano3232/E-Commerce-Grow-Up-Libros",
            description:`Bootcamp's final project. \n At GrowUpLibros we believe that reading can be a powerful tool to achieve personal growth. That's why we are creating an online book store selling philosophy and personal development books, where you'll find the kind of wisdom and encouragement that can help you grow up.`
        },
        {
            title:'TicTacToe',
            link:"https://tateti-rho.vercel.app/",
            repo:"https://github.com/mariano3232/tateti", 
            image:tateti,
            description:"tic-tac-toe is a small project built with reactJs with the main features of a classic game of tic-tac-toe with animations and victory counter"
        }
    ]

    return obj;
}