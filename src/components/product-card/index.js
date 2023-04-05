import React from 'react'
import styles from '../../styles/productCard.module.scss'
import PropTypes from 'prop-types'
import Image from 'next/image'
import clsx from 'clsx'
import Badge from '../badge'
import isEmpty from '@/utils/helpers'

const ProductCard = ({item}) => {
    if (isEmpty(item)) {
        return null
    }
    return (
        <div className={styles.container}>
            <Image 
                className={styles.bgImage} 
                src='https://jjji.ru/400x225' 
                alt='demo-img'
                width={400}
                height={225}
            /> 
            <div className={styles.badgeWrapper}>
                <Badge>TOP</Badge>
            </div>
            <div className={styles.contentWrapper}>
                <h3 className={clsx(styles.title, styles.truncatep)}>{item.title}</h3>
                <span className={styles.brand}>Бренд: {item.userId}</span>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    item: PropTypes.object
}

export default ProductCard
