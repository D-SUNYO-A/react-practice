/**
 * Objet permettant de stocker et récupérer des données dans le localStorage.
 * @class
 */
const local = new (class {
  /**
   * Stocke une valeur dans le localStorage avec la clé spécifiée.
   * @param {string} key - La clé sous laquelle stocker la valeur.
   * @param {*} value - La valeur à stocker.
   * @example
   * // Exemple d'utilisation :
   * local.set('username', 'John');
   */
  set = (key, value) => {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  };

  /**
   * Récupère une valeur depuis le localStorage pour la clé spécifiée.
   * @param {string} key - La clé pour récupérer la valeur.
   * @returns {*} La valeur récupérée depuis le localStorage.
   * @example
   * // Exemple d'utilisation :
   * const username = local.get('username');
   * console.log(username); // Affiche : 'John'
   */
  get = (key) => {
    const serializedValue = localStorage.getItem(key);
    return JSON.parse(serializedValue);
  };
})();

export default local;
