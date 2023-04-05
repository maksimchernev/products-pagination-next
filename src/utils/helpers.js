/**
 * Returns products per page.
 *
 * @param items 
 * @param page 
 * @param items
 * @return {array}
 */

export const getCurrentProducts = (items, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    return items.slice(startIndex, startIndex + perPage);
}

/**
 * Returns true if the value is undefined/null/empty object/empty string.
 *
 * @param value
 * @return {boolean}
 */
const isEmpty = ( value ) =>
	value === undefined ||
	value === null ||
	( typeof value === 'object' && Object.keys( value ).length === 0 ) ||
	( typeof value === 'string' && value.trim().length === 0 );

export default isEmpty;
