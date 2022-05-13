import React from 'react'
import styles from "./styles.module.css"
import { Link } from 'react-router-dom'

const MenuBar = ({ menu = [] }) => {
    return (
        <div className={styles.menubar}>
            {
                menu.map((item) => (
                    <Link to={item.url} className={`${styles.menu} ${item.active && styles.active}`}>{item.name}</Link>
                ))
            }


        </div>
    )
}

export default MenuBar