import React from 'react'
import styles from '../../styles/button.module.scss'
import clsx from 'clsx'
const Button = ({children, Default, Success, Danger, Type, Primary, Secondary, FullWidth, classNames, onClickEvent}) => {

    const buttonStyles = clsx(styles.buttonRounded, Default && styles.default, Success && styles.success, Danger && styles.danger, Primary && styles.primary, Secondary && styles.secondary, FullWidth ? styles.block : styles.inline, classNames && classNames)
    if (Type === 'button') {
        return (
          <button className={buttonStyles} onClick={onClickEvent}>{children}</button>
        )
    }
    return (
        <a className={buttonStyles} onClick={onClickEvent}>{children}</a>
    )
}

export default Button