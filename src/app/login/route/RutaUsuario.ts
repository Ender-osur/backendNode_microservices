import { Router } from "express";
import controladorUsuario from "../controller/ControladorUsuario";

class RutaUsuario {
  public rutaUsuarioApi: Router;

  constructor() {
    this.rutaUsuarioApi = Router();
    this.loadRoutes();
  }

  private loadRoutes(): void {
    this.rutaUsuarioApi.post("/add", controladorUsuario.crearNuevoUsu);
  }
}

const rutaUsuario = new RutaUsuario();
export default rutaUsuario.rutaUsuarioApi;
