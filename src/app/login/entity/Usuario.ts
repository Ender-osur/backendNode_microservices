class Usuario {
  public codUsuario: number;
  public nombresUsuario: string;
  public apellidosUsuario: string;

  constructor(codu: number, nomb: string, apel: string) {
    this.codUsuario = codu;
    this.nombresUsuario = nomb;
    this.apellidosUsuario = apel;
  }
}

export default Usuario;
