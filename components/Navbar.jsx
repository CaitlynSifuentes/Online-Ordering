import React from 'react'
import Image from 'next/image'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/telephone.png" alt="" width="32" height="32"/>
        </div>
        <div className={styles.ordering}>
          <div className={styles.texts}>Order Now!</div>
          <div className={styles.texts}>800-454-2983</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItems}>Home</li>
          <li className={styles.listItems}>Menu</li>  
          <li className={styles.listItems}>Products</li>  
          <Image src="/images/logo.png" alt="" width="160px" height="69px"/>
          <li className={styles.listItems}>Events</li>  
          <li className={styles.listItems}>Blog</li>  
          <li className={styles.listItems}>Contact</li>   
        </ul>  
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
        <Image src="/images/cart.png" alt="" width="30px" height="30px"/>
        <div className={styles.counter}>2</div>
        </div>
      </div>

    </div>
  )
}

export default Navbar