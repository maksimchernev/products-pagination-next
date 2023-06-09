import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/pagination.module.scss'
import Button from '../button';

const Pagination = ({totalItems, perPage, currentPage, onPageChange, prevPage, nextPage}) => {
  const totalPages = Math.ceil(totalItems / perPage);
  if (totalPages === 1) return null;

  return (
    <div className={styles.container}>
      <Button classNames={styles.minus} onClickEvent={prevPage} default type='button'>-</Button>
      <input 
        placeholder={currentPage} 
        className={styles.pageInput} 
        value={currentPage}
        onChange={onPageChange}
        type='number'
      ></input>
      <Button classNames={styles.plus} onClickEvent={nextPage} defaultC type='button'>+</Button>
    </div>
  )
}

Pagination.propTypes = {
    totalItems: PropTypes.number,
    perPage: PropTypes.number,
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func,
    prevPage: PropTypes.func,
    nextPage: PropTypes.func
}

export default Pagination