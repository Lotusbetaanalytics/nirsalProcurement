import React from 'react'
import styles from './styles.module.css'

const Cards = ({ title, count }) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{count}</p>
        </div>
    )
}

export default Cards