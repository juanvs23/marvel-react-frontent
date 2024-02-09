/**
 * Replaces the "http://" protocol in a given URL with "https://".
 *
 * @param {string} url - The URL to modify.
 * @return {string} The modified URL with the "http://" protocol replaced with "https://".
 */
export default function changehttpTohttps(url){
    return url.replace('http://', 'https://');
}