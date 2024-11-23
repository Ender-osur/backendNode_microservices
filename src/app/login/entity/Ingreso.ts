import Usuario from "./Usuario";

class Ingreso {
  public codIngreso: number;
  public codUsuario: Usuario;
  public fechaIngreso: string;
  public horaIngreso: string;

  constructor(codi: number, codu: Usuario, fech: string, hora: string) {
    this.codIngreso = codi;
    this.codUsuario = codu;
    this.fechaIngreso = fech;
    this.horaIngreso = hora;
  }
}

export default Ingreso;
