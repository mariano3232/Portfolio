import { useState } from 'react'
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import NavBar from './components/NavBar.jsx'
import placeholder from './placeHolder.jpg'
import Slider from './components/Carousel.jsx';
import Projects from './components/Projects.jsx'
import Footer from './components/Footer';
import { useEffect } from 'react';



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
        else setIsVisible(false)
    }

    const loadProjects=(entries,observer)=>{
        let entry=entries[0]
        if (entry.isIntersecting){
            setIsProjectsVisible(true)
        }
        else setIsProjectsVisible(false)
    }
    const loadFooter=(entries,observer)=>{
        let entry=entries[0];
        if (entry.isIntersecting){
            setIsFooterVisible(true)
        }
        else setIsFooterVisible(false)
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
        if (myContainer.current){observer.observe(myContainer.current)}
        if (Container2.current){observer2.observe(Container2.current)}
        if (Container3.current){observer3.observe(Container3.current)}
    },[])



  return (
    <div className={styles.App}>   
    <NavBar/>
        <div className={styles.first}>
        <img src={placeholder}alt="??????" className={styles.img}/>
            <div className={styles.text}>
                <h1 className={styles.bla}>Mariano Melendez</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, in quisquam, architecto tempore alias laboriosam quos iure blanditiis laudantium nesciunt excepturi vel similique magni optio corporis animi, nostrum eum ea.</p>
            </div>
        </div>
        <h1 ref={myContainer} className={styles.h1}>Skills :</h1>
        <div className={isVisible?styles.secondbgVisible:styles.secondbg}>
            <div className={isVisible?styles.secondVisible:styles.second}>
                <div className={styles.queseyo}>
                <Slider/>
                </div>
            </div>
        </div>
        <h1 ref={Container2} className={styles.projects}>Proyectos :</h1>
        <div ref={Container2} className={styles.ref}>
            <div className={isProjectsVisible?styles.projectsBgVisible2:styles.projectsBgHidden2}>
                <div className={isProjectsVisible?styles.projectsBgVisible:styles.projectsBgHidden}>
                    <Projects/>
                </div>
            </div>
        </div>
        <div ref={Container3} className={isFooterVisible?styles.footerVisible:styles.footerHidden}>
           <Footer/>
        </div>
    </div>
    
  )
}

export default App
