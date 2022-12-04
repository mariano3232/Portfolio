import { useState,useRef,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import NavBar from './components/NavBar.jsx'
import {Link} from 'react-scroll'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer';
import { ContactUs } from './components/ContactForm';
import cv from './Resume.pdf'
import Skills from './components/Skills';

function App() {

    const [isVisible,setIsVisible]=useState(false)
    const [isProjectsVisible,setIsProjectsVisible]=useState(false)
    const [isFooterVisible,setIsFooterVisible]=useState(false)
    const myContainer = useRef(null);
    const Container2=useRef(null);
    const Container3=useRef(null)
    
    console.log('isVisible :',isVisible);

    const loadElement=(entries,observer)=>{
        let entry=entries[0]
        if (entry.isIntersecting){
            setIsVisible(true)
        }
        // else setIsVisible(false)
    }

    const loadProjects=(entries,observer)=>{
        let entry=entries[0]
        if (entry.isIntersecting){
            setIsProjectsVisible(true)
        }
        // else setIsProjectsVisible(false)
    }
    const loadFooter=(entries,observer)=>{
        let entry=entries[0];
        if (entry.isIntersecting){
            setIsFooterVisible(true)
        }
        // else setIsFooterVisible(false)
    }

    useEffect(()=>{
        const observer= new IntersectionObserver(loadElement,{
            root:null,
            rootMargin:'200px 0px 0px 0px',
            threshold:1.0,
        })
        const observer2= new IntersectionObserver(loadProjects,{
            root:null,
            rootMargin:'-500px 0px 0px 0px',
            threshold:0.01,
        })
        const observer3= new IntersectionObserver(loadFooter,{
            root:null,
            rootMargin:'0px 0px 0px 0px',
            threshold:0.8,
        })
        window.scrollTo(0,175)
        if (myContainer.current){observer.observe(myContainer.current)}
        if (Container2.current){observer2.observe(Container2.current)}
        if (Container3.current){observer3.observe(Container3.current)}
    },[])



  return (
    <div className={styles.App}>   
    <NavBar/>
    <div className={styles.circle}></div>
        <div id="#Intro" className={styles.first}>
            <div className={styles.text}>
                <h2>Mariano Melendez</h2>
                <h1 className={styles.bla}>Full Stack Developer</h1>
                <p>I am a self-taught developer with a passion for engineering and problem-solving. I have knowledge in several modern technologies and am looking for a position as a full stack, front-end or back-end developer.</p>
                <a target='_blank' href="https://certificates.soyhenry.com/cert?id=9b5f78a5-4b44-49d5-8a8d-fc1db4a46a4d">Full Stack certificate</a>
                <div className={styles.buttons}>
                    <Link activeClass="active" to="#ContactForm" spy={false} smooth={true} offset={-50} duration={500}>
                        <p className={styles.contact}>Get in touch ↓</p>
                    </Link>
                    <a href={cv} download className={styles.contact}>Resume.pdf</a>
                </div>
            </div>
        </div>
        <h1 ref={myContainer} className={styles.h1}>Skills :</h1>
        <div className={isVisible?styles.secondbgVisible:styles.secondbg} id='#Skills'>
            <div className={isVisible?styles.secondVisible:styles.second}>
                <div className={styles.queseyo}>
                    <Skills/>
                </div>
            </div>
        </div>
        <h1 ref={Container2} className={styles.projects}>Projects :</h1>
        <div ref={Container2} id="#Projects" className={styles.ref}>
            <div className={isProjectsVisible?styles.projectsBgVisible2:styles.projectsBgHidden2}>
                <div className={isProjectsVisible?styles.projectsBgVisible:styles.projectsBgHidden}>
                    <Projects/>
                </div>
            </div>
        </div>
        <div id="#ContactForm">
            <ContactUs/>
        </div>
        <div ref={Container3} className={isFooterVisible?styles.footerVisible:styles.footerHidden}>
           <Footer/>
        </div>
    </div>
    
  )
}

export default App
