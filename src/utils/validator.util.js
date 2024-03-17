/* 
El objetivo de este módulo es comprobar si los datos que introduce el usuario son validos en forma, por ejemplo, si un email tiene la forma nombre@dominio.xxx
o si un password cumple un mínimo de condiciones de seguridad, por ejemplo, el password del usuario deberá tener:

- una letra minúscula.
- una letra mayúscula.
- un dígito numérico.
- un carácter especial de la lista proporcionada.
- una longitud de al menos 8 caracteres y como máximo 12 caracteres.

La forma de una funcion de falidación sería: function = (<dato a validar>) => /regex/.test(<dato a validar>) 

Hay muchas más expresiones regulars, algunos ejemplos serían:

url: /^(http:\/\/|https:\/\/)?www\.[a-zA-Z0-9:?&=._/-]+\.[a-zA-z]{2,3}$/
fecha: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/


*/

const validationPassword = (password) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(
    password
  );

const validationEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
    email
  );

module.exports = {
  validationPassword,
  validationEmail,
};








