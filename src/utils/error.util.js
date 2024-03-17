/* Esta función nos ayuda a lanzar errores (excepciones) personalizados de forma más
* fácil.
* 
* Es mejor no utilizarla en los controladores, ya que las peticiones http suelen generar
* de forma automática sus propios códigos de error.
*
*
*/

const setError = (code, message) => {
  const error = new Error();
  error.code = code;
  error.message = message;
  console.log('Server launched or captured the following error:', error)
  return error;
};

module.exports = { setError };
