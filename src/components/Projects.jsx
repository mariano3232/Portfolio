import React from 'react'
import getProjects from './projectsObject'
import styles from './Projects.module.css'
import { useState } from 'react';



export default function Projects(){
    
    
    let [focus,setFocus]=useState(null)

    let projects=getProjects();

    console.log('projects :',projects)

    return(
        <div className={styles.background2}>
            <div className={styles.background}>
                {
                    projects.map(e=>{
                        return(
                        <a
                        onClick={focus===e.title?()=>{setFocus(null)}:()=>{setFocus(e.title)}}
                        className={styles.default}
                        >
                            <img src={e.image} className={styles.img} />
                            <div className={styles.info}>
                                <h5 className={styles.title}>{e.title}</h5>
                                <p>{e.description}</p>
                                <a href={e.link} target='blank'><h3>Visit</h3></a>
                            </div>
                        </a>
                        )
                    })
                }
            </div>
        </div>
    )
}