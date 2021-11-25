import React from 'react'
import styles from './Title.module.css'

export default function Title() {
    return( <div className={styles.text}>
        <p className={styles.title}>Message in a</p>
        <p className={styles.lighter}>lighter</p>
      </div>)
}