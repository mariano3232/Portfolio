import React from "react";
import styles from "./Skills.module.css"
import getSkills from "./skillsObject";


export default function Skills(){

    let skills=getSkills();

    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
            {   
                skills.general.map(e=>{
                   return(
                    <div key={e.name} className={styles.flex}>
                        <img src={e.img} alt="techIcon" className={styles.img}/>
                        <p>{e.name}</p>
                    </div>
                   )
                })
            }
            </div>
            <div className={styles.subContainer}>
            {   
                skills.front.map(e=>{
                   return(
                    <div key={e.name} className={styles.flex}>
                        <img src={e.img} alt="techIcon" className={styles.img}/>
                        <p>{e.name}</p>
                    </div>
                   )
                })
            }
            </div>
            <div className={styles.subContainer}>
            {   
                skills.back.map(e=>{
                   return(
                    <div key={e.name} className={styles.flex}>
                        <img src={e.img} alt="techIcon" className={styles.img}/>
                        <p>{e.name}</p>
                    </div>
                   )
                })
            }
            </div>
        </div>
    )
}