/**
 * Exportación
 */

// Exportación y Declaración
export let url;
export const saludo = () => "Hola";
export class Persona { };

// Exportación y Post-Declaración
let nombre = "Keneth";
const saludar = () => "Hola";
const despedir = () => "Adiós";
class Direccion { };

export { nombre, saludar };

// Exportar y Renombrar
export { nombre as name };

// Exportación por defecto
export default "Murillo"; // Solo puede existir uno por archivo de JavaScript.




