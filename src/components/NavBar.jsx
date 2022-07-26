import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import {Link} from 'react-scroll'
import styles from './navBar.module.css'

function NavBar() {

    const [scrolled,setScrolled]=useState(false)

console.log('scrolled :',scrolled)

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if (window.scrollY>50){
            setScrolled(true)
        }
        else setScrolled(false)
    })
},[])

  return (
    <Navbar expand="lg" fixed="top" className={scrolled?styles.scrolled:styles.notScrolled}>
        {/* <Navbar.Brand href="#home" className={styles.logo}>Portfolio</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toogle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link activeClass="active" to="#Intro" spy={false} smooth={true} offset={-100} duration={500}>
              <h3 className={styles.navItem}>Inicio</h3>
            </Link>
            <Link activeClass="active" to="#Skills" spy={false} smooth={true} offset={-140} duration={500}>
              <h3 className={styles.navItem}>Skills</h3>
            </Link>
            <Link activeClass="active" to="#Projects" spy={false} smooth={true} offset={-150} duration={500}>
              <h3 className={styles.navItem}>Proyectos</h3>
            </Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;