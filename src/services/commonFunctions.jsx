export const modifyPrice = (price) => {
    if (!price) return "";
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
