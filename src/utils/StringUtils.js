/**
 * String utility 
 */
export default class StringUtils {

    /**
     * Converts String 1st letter to captial case
     * 
     * @param {string} string 
     */
    static capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}