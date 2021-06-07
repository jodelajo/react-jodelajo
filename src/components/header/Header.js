import React from 'react'
import styles from './Header.module.css'

function Header() {
    return <div className={styles['header-container']}>
        
        <h1>deSign <span className={styles['and']}>&</span>& Coding</h1>
        </div>
}

export default Header
