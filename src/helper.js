/**
 * Funciones de apoyo
 */

/**
 * Hace un peticion a la web
 * @param {*} url 
 * @param {*} mode 
 */
function webRequest(url, mode){
    const response = fetch(url)
    .then(response => {
        if(!response.ok) throw (response.status);
        return response.json()})
    .then(data => {console.log("data :",data.results[0]);return data.results[0]})
    .catch(reason => {console.log("ERROR: ",reason);throw (reason)});
    return (response);
}
/**
 * Obtiene un usuario random
 */
export function getUser(){
    const url="https://api.randomuser.me/";
    const response = webRequest(url, null);
    return (response);
}