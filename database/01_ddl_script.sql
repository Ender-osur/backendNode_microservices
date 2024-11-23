CREATE TABLE accesos(
  cod_usuario int4 not null,
  correo_acceso VARCHAR(150) NOT NULL,
  clave_acceso VARCHAR(150) NOT NULL,
  uuid_acceso VARCHAR(150) NOT NULL,
  CONSTRAINT pk_accesos PRIMARY KEY (cod_usuario)
);
ALTER TABLE accesos OWNER TO user_espe;

CREATE UNIQUE INDEX indice_correo on accesos (correo_acceso);

CREATE TABLE ingresos(
  cod_ingreso SERIAL NOT NULL,
  cod_usuario INT4 NOT NULL,
  fecha_ingreso DATE NOT NULL,
  hora_ingreso TIME NOT NULL,
  CONSTRAINT pk_ingresos PRIMARY KEY(cod_ingreso)
);

ALTER TABLE ingresos OWNER TO user_espe;

CREATE TABLE productos(
  cod_producto SERIAL NOT NULL,
  cod_tipo INT4 NOT NULL,
  nombre_producto VARCHAR(150) NOT NULL,
  precio_producto DECIMAL(10,2) NOT NULL,
  CONSTRAINT pk_productos PRIMARY KEY(cod_producto)
);

ALTER TABLE productos OWNER TO user_espe;

CREATE TABLE tipos(
  cod_tipo SERIAL NOT NULL,
  nombre_tipo VARCHAR(150) NOT NULL,
  CONSTRAINT pk_tipos PRIMARY KEY(cod_tipo)
);

ALTER TABLE tipos OWNER TO user_espe;

CREATE TABLE usuarios(
  cod_usuario SERIAL NOT NULL,
  nombres_usuario VARCHAR(150) NOT NULL,
  apellidos_usuario VARCHAR(150) NOT NULL,
  CONSTRAINT pk_usuarios PRIMARY KEY (cod_usuario)
);

ALTER TABLE usuarios OWNER TO user_espe;

ALTER TABLE accesos
  ADD CONSTRAINT fk_accesos_ref_usuarios FOREIGN KEY(cod_usuario)
  REFERENCES usuarios(cod_usuario)
  ON DELETE RESTRICT on UPDATE CASCADE;

ALTER TABLE ingresos
  ADD CONSTRAINT fk_ingresos_ref_accesos FOREIGN KEY(cod_usuario)
  REFERENCES accesos(cod_usuario)
  ON DELETE RESTRICT on UPDATE CASCADE;

ALTER TABLE productos
  ADD CONSTRAINT fk_productos_ref_tipos FOREIGN KEY(cod_tipo)
  REFERENCES tipos(cod_tipo)
  ON DELETE RESTRICT on UPDATE CASCADE;