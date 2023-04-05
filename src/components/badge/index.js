import clsx from 'clsx'
import React from 'react'
import styles from '../../styles/badge.module.scss'
import PropTypes from 'prop-types'

const Badge = ({children}) => {
if(!children) return
  return (
    <span className={clsx(styles.container, styles.secondary)}>{children}</span>
  )
}

Badge.propTypes = {
  children: PropTypes.node
}

export default Badge