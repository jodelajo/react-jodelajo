import React from 'react'
import styles from './Title.module.css'

export default function Title() {
    return( <div className={styles.text}>
        <div className={styles.title}>Message in a</div>
        <div className={styles.lighter}>flame</div>
      </div>)
}