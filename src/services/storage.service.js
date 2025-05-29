/**
 * Storage Service
 * Abstracción para manejar el almacenamiento del navegador
 * Utilizamos sessionStorage para mantener sesiones independientes por pestaña
 */

export const storageService = {
  /**
   * Almacena un valor en sessionStorage
   * @param {string} key - Clave para almacenar el valor
   * @param {any} value - Valor a almacenar (objetos serán convertidos a JSON)
   */
  set: (key, value) => {
    try {
      const valueToStore = typeof value === 'object' ? JSON.stringify(value) : value;
      sessionStorage.setItem(key, valueToStore);
      return true;
    } catch (error) {
      console.error('Error storing data in sessionStorage:', error);
      return false;
    }
  },

  /**
   * Obtiene un valor de sessionStorage
   * @param {string} key - Clave para recuperar el valor
   * @param {any} defaultValue - Valor por defecto si no existe la clave
   * @returns {any} - Valor recuperado (intenta convertir de JSON si es posible)
   */
  get: (key, defaultValue = null) => {
    try {
      const value = sessionStorage.getItem(key);
      if (value === null) return defaultValue;
      
      // Intentar convertir de JSON si es posible
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    } catch (error) {
      console.error('Error retrieving data from sessionStorage:', error);
      return defaultValue;
    }
  },

  /**
   * Elimina un valor de sessionStorage
   * @param {string} key - Clave a eliminar
   */
  remove: (key) => {
    try {
      sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing data from sessionStorage:', error);
      return false;
    }
  },

  /**
   * Limpia todo el sessionStorage
   */
  clear: () => {
    try {
      sessionStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
      return false;
    }
  },

  /**
   * Verifica si una clave existe en sessionStorage
   * @param {string} key - Clave a verificar
   * @returns {boolean} - True si existe, false si no
   */
  has: (key) => {
    try {
      return sessionStorage.getItem(key) !== null;
    } catch (error) {
      console.error('Error checking key in sessionStorage:', error);
      return false;
    }
  }
};

export default storageService;