import cifrar from "bcryptjs";
import jwt from "jsonwebtoken";
import { Response } from "express";
import Acceso from "../entity/Acceso";
import InfoToken from "../entity/InfoToken";
import pool from "../../../config/connection/dbConnection";
import { SQL_Usuario } from "../repository/sql_registrar";
import { SQL_Acceso } from "../repository/sql_acceso";

class DaoUsuarioRegistrar {
  protected static async nuevo(objAcceso: Acceso, res: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        let accion = 1;
        let datos = new InfoToken();

        const cantidad = await consulta.one(SQL_Usuario.CANTIDAD_CORREO, objAcceso.correoAcceso);
        if (cantidad.encontrado == 0) {
          accion = 2;
          const cifrada = cifrar.hashSync(objAcceso.claveAcceso as string);
          const usu = await consulta.one(SQL_Usuario.CREAR_USUARIO, [
            objAcceso.codUsuario.nombresUsuario,
            objAcceso.codUsuario.apellidosUsuario,
          ]);
          const nuevoCodUsuario = usu.codUsuario;
          await consulta.none(SQL_Usuario.CREAR_ACCESO, [nuevoCodUsuario, objAcceso.correoAcceso, cifrada]);

          await consulta.none(SQL_Acceso.REGISTRAR_INGRESO, nuevoCodUsuario);
          const infoCompleta: any = await consulta.result(SQL_Acceso.DATOS_TOKEN, objAcceso.correoAcceso);
          const infoClave = infoCompleta.rows.shift();
          delete infoClave.claveAcceso;
          datos = infoClave;
        }
        return { accion, datos };
      })
      .then(({ accion, datos }) => {
        switch (accion) {
          case 1:
            res.status(400).json({respuesta: "El correo ya existe"});
            break;
          case 2:
            const token = jwt.sign(datos, "clavesupersecreta", {expiresIn: "8h"});
            res.status(200).json(token);
            break;
        }
      })
      .catch((miError) => {
        console.log("ERROR", miError);
        res.status(400).json({ respuesta: "Error al crear usuario" });
      });
  }
}

export default DaoUsuarioRegistrar;
