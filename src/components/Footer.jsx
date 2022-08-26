import React from "react";
import styles from "./Footer.module.css"
import github from "../GitHub.png"
import linkedin from "../linkedin.png"
import henry from "../Henry.jpg"
import { Link } from "react-router-dom";
export default function Footer(){

    const githubURL="https://github.com/mariano3232"

    return(
        <div className={styles.footer}>
            {/* <h1 className={styles.xd}>Contactame!</h1> */}
            <div className={styles.icons}>
                <a href="https://github.com/mariano3232" target='_blank'><img src={github} className={styles.icon} /></a>
                <a href="https://www.linkedin.com/in/mariano-melendez/" target='_blank'><img src={linkedin} className={styles.icon} /></a>
                <a href="https://www.talent.soyhenry.com/candidate/5476" target='_blank'><img src={henry} className={styles.icon} /></a>
            </div>
        </div>
    )
}