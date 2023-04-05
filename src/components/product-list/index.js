import React from 'react'
import styles from '../../styles/productList.module.scss'
import ProductCard from '../product-card'
import PropTypes from 'prop-types'
import { getCurrentProducts } from '@/utils/helpers'

const ProductList = ({items, page, perPage}) => {
    const currentProducts = getCurrentProducts(items, page, perPage)
    if (!currentProducts.length) return <p className={styles.errorMessage}>No products found</p>
    return (
        <div className={styles.container}>
            {currentProducts.map(item => {
                return <ProductCard key={item.id} item={item}/>
            })}
        </div>
    )
}



export default ProductList

ProductList.propTypes = {
    items: PropTypes.array
}