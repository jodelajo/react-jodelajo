import React from 'react'
import styles from './Message.module.css'
import Flame from './items/flame/Flame'
import Title from './items/title/Title'

export default function Message() {
    return (
<div className={styles.messageContainer}>
    <Flame />
    <div className={styles.title}>
    <Title />
    </div>
  
</div>
    )
}