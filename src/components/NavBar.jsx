import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
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
            <Nav.Link href="#home" className={styles.navItem}>Inicio</Nav.Link>
            <Nav.Link href="#Skills" className={styles.navItem}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={styles.navItem}>Proyectos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;