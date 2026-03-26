import React from 'react'
import styles from './Buttom.module.css'

const Buttom = () => {
  return (
    <div className={styles.button}>
      <h3 className={styles.h3}>This is Buttom</h3>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Buttom
