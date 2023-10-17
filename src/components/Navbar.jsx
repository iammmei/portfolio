import React from 'react'
import styles from './Navbar.module.css';

export const Navbar = () => {

  return ( 
     <nav className={styles.navbar}>
    <a href="/">Portfolio</a>
    <div>
        <ul>
            <li> <a href="#about"></a> About </li>

            <li> <a href="#experience"></a>Experience </li>

            <li> <a href="#projects"></a> Projects </li>

            <li> <a href="#"></a> Contact </li>

        </ul>
    </div>
  </nav>
  )
}

export default Navbar
