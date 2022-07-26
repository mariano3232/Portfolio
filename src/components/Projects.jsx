import React from 'react'
import getProjects from './projectsObject'
import styles from './Projects.module.css'
import { useState } from 'react';



export default function Projects(){
    
    
    let [focus,setFocus]=useState(null)

    let projects=getProjects();

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
                                <div className={styles.flex}>
                                    <a href={e.link} target='blank'><h3>Visit</h3></a>
                                    <a href={e.repo} target='blank'><h3>Code</h3></a>
                                </div>
                            </div>
                        </a>
                        )
                    })
                }
            </div>
        </div>
    )
}