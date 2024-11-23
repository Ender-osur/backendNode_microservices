export const SQL_Acceso = {
  REGISTRAR_INGRESO:
    "INSERT INTO ingresos(cod_usuario, fecha_ingreso,\
  hora_ingreso) VALUES ($1, CURRENT_DATE, CURRENT_TIME)",
  DATOS_TOKEN:
    "SELECT a.cod_usuario, u.nombres_usuario,\
  u.apellidos_usuario, a.clave_usuario, a.correo_acceso, \
  a.uuid_acceso \
  FROM accesos a INNER JOIN usuarios u ON \
  a.cod_usuario = u.cod_usuario \
  WHERE a.correo_acceso = $1",
};
