import { Request, Response } from "express";
import DaoUsuarioRegistrar from "../dao/DaoUsuarioRegistrar";

class ControladorUsuario extends DaoUsuarioRegistrar {
    
  public crearNuevoUsu(req: Request, res: Response):void {
      const objAcceso = req.body;
      ControladorUsuario.nuevo(objAcceso, res);

    }
}
const controladorUsuario = new ControladorUsuario();
export default controladorUsuario;