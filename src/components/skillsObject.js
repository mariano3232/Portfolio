import cssIcon from "../assets/TechIcon/css.png"
import sassIcon from "../assets/TechIcon/sass.png"
import htmlIcon from "../assets/TechIcon/html5.png"
import jsIcon from "../assets/TechIcon/jsIcon.png"
import nodeIcon from "../assets/TechIcon/node.png"
import reactIcon from "../assets/TechIcon/react.png"
import reduxIcon from "../assets/TechIcon/redux.png"
import nextIcon from "../assets/TechIcon/nextIcon.png"
import firebaseIcon from "../assets/TechIcon/firebaseIcon.png"
import expressIcon from "../assets/TechIcon/express.png"
import gitIcon from "../assets/TechIcon/git.png"
import sqlIcon from "../assets/TechIcon/pg.png"

export default function getSkills(){

    let skills={
        general:[
            {
                name:'javaScript',
                img:jsIcon
            },
            {
                name:'Next.Js',
                img:nextIcon
            },
            {
                name:'Firebase',
                img:firebaseIcon
            },
            {
                name:'Git',
                img:gitIcon
            }
        ],
        front:[
            {
                name:'React',
                img:reactIcon
            },
            {
                name:'Redux',
                img:reduxIcon
            },
            {
                name:'HTML',
                img:htmlIcon
            },
            {
                name:'CSS',
                img:cssIcon
            },
            {
                name:'SASS',
                img:sassIcon
            }
        ],
        back:[
            {
                name:'NodeJs',
                img:nodeIcon
            },
            {
                name:'Express',
                img:expressIcon
            },
            {
                name:'PostgreSQL',
                img:sqlIcon
            },
        ]
    }
    return skills
}