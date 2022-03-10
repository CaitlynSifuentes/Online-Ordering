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
        <div className={styles.texts}>Order Now!</div>
        <div className={styles.texts}>800-454-2983</div>
      </div>

      <div className={styles.item}></div>

      <div className={styles.item}></div>

    </div>
  )
}

export default Navbar