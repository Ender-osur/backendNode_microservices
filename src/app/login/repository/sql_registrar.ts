export const SQL_Usuario = {
  CREAR_USUARIO:
    "INSERT INTO usuarios(nombres_usuarios, apellidos_usuarios) VALUES \
  ($1, $2) RETURNING cod_usuario",
  CREAR_ACCESO:
    "INSERT INTO accesos(cod_usuario, correo_acceso, clave_acceso, uuid_acceso) \
  VALUES ($1, $2, $3, gen_random_uuid())",
  CANTIDAD_CORREO: "SELECT COUNT(cod_usuario) AS encontrado \
  FROM accesos WHERE correo_acceso = $1",
};
