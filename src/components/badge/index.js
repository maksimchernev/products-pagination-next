import clsx from 'clsx'
import React from 'react'
import styles from '../../styles/badge.module.scss'
const Badge = ({children}) => {
if(!children) return
  return (
    <span className={clsx(styles.container, styles.secondary)}>{children}</span>
  )
}

export default Badge