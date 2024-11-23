import Usuario from "./Usuario";

class Acceso {
  public codUsuario: Usuario;
  public correoAcceso: string;
  public claveAcceso: string;
  public uuidAcceso: string;

  constructor(codu: Usuario, corr: string, clav: string, uuid: string) {
    this.codUsuario = codu;
    this.correoAcceso = corr;
    this.claveAcceso = clav;
    this.uuidAcceso = uuid;
  }
}

export default Acceso;
