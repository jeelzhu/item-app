/**
 * Formats a date string into a more readable format.
 * @param {string} dateString - The date string to format.
 * @returns {string} - The formatted date.
 */
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); 
};

/**
 * Joins an array of strings with a specified separator.
 * @param {Array<string>} array - The array of strings to join.
 * @param {string} separator - The separator to use.
 * @returns {string} - The joined string.
 */
export const joinArray = (array, separator = ', ') => {
    return array.join(separator);
};

/**
 * Checks if a string is a valid date.
 * @param {string} value - The string to check.
 * @returns {boolean} - True if valid date, false otherwise.
 */
export const isDateString = (value) => {
    const date = new Date(value);
    // Check if the date is valid
    return !isNaN(date.getTime()); 
};