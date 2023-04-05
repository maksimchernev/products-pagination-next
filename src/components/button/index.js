import React from 'react'
import styles from '../../styles/button.module.scss'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const Button = ({children, defaultColor, successColor, dangerColor, type, primary, secondary, fullWidth, classNames, onClickEvent}) => {
    if (!children) return
    const buttonStyles = clsx(styles.buttonRounded, defaultColor && styles.default, successColor && styles.success, dangerColor && styles.danger, primary && styles.primary, secondary && styles.secondary, fullWidth ? styles.block : styles.inline, classNames && classNames)
    if (type === 'button') {
        return (
          <button className={buttonStyles} onClick={onClickEvent}>{children}</button>
        )
    }
    return (
        <a className={buttonStyles} onClick={onClickEvent}>{children}</a>
    )
}

Button.propTypes ={
    children: PropTypes.node, 
    defaultColor: PropTypes.bool, 
    successColor:PropTypes.bool,
    dangerColor:PropTypes.bool,
    type:PropTypes.string,
    primary:PropTypes.bool,
    secondary:PropTypes.bool,
    classNames:PropTypes.string,
    onClickEvent:PropTypes.func,
}

export default Button