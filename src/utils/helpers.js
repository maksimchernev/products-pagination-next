export const getCurrentProducts = (items, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    return items.slice(startIndex, startIndex + perPage);
}