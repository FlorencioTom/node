// ejecutar este archivo en terminal para obtener un JWT Secret válido
console.log(require('crypto').randomBytes(32).toString('hex'))