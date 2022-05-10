import React, { useState } from 'react'
import styles from './styles.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

const PageTtitle = ({ title }) => {
  const [search, setSearch] = useState("")
  return (
    <div className={styles.pageTitle}>
      <div className={styles.title}>{title}</div>
      <div className={styles.search}>
        <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
        <AiOutlineSearch />
      </div>
    </div>
  )
}

export default PageTtitle