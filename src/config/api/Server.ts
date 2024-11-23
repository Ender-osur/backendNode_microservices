import cors from "cors"; // Cross-Origin-Resource-Sharing
import morgan from "morgan"; // Pitarita
import express from "express";
import rutaUsuarioApi from "../../app/login/route/RutaUsuario";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.loadConfig();
    this.loadRoutes();
  }

  public loadConfig(): void {
    this.app.set("PORT", 3123);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public loadRoutes(): void {
    this.app.use("/api/user", rutaUsuarioApi);
    // this.app.use("/api/login", ruteoLogin);
  }

  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("BACKEND FUNCIONANDO", this.app.get("PORT"));
    });
  }
}

export default Server;
