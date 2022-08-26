import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Carousel.module.css'

import cssIcon from "../Images/cssIcon.png"
import htmlIcon from "../Images/htmlIcon.png"
import jsIcon from "../Images/jsIcon.png"
import nodeIcon from "../Images/nodeIcon.png"
import reactIcon from "../Images/reactIcon.jpg"
import reduxIcon from "../Images/reduxIcon.jpg"

function Slider(props){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 700 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      return(
<Carousel
  swipeable={false}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={false} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="transform 700ms ease-in-out"
  transitionDuration={700}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-20-px"
>
        <div><img src={htmlIcon} className={styles.img} /> <p className={styles.skill}>HTML</p></div>
        <div><img src={cssIcon} className={styles.img} /> <p className={styles.skill}>CSS</p></div>
        <div><img src={jsIcon} className={styles.img} /> <p className={styles.js}>JavaScript</p></div>
        <div><img src={nodeIcon} className={styles.img} /> <p className={styles.skill}>Node.Js</p></div>
        <div><img src={reactIcon} className={styles.img} /> <p className={styles.skill}>React</p></div>
        <div><img src={reduxIcon} className={styles.img} /> <p className={styles.skill}>Redux</p></div>
</Carousel>
    )
}

export default Slider;