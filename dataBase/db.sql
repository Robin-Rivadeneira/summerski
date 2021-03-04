CREATE DATABASE summerski;
USE summerski;
-- TABLE USER
-- all pasword wil be encrypted using SHA1
  CREATE TABLE Usurios (
    id INT(11) NOT NULL PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    Edad VARCHAR(100) NOT NULL,
    Estado tinyint(1) NOT NULL,
    Created_at timestamp NOT NULL DEFAULT current_timestamp
  );

  ALTER TABLE Usurios MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE Personajes(
    id INT(11) NOT NULL PRIMARY KEY,
    Imagen VARCHAR(250) NOT NULL,
    Nombre VARCHAR(50) NOT NULL,
    Edad VARCHAR(30) NOT NULL,
    Estatura VARCHAR(30) NOT NULL,
    Descripcion VARCHAR(250) NOT NULL,
    Created_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE Personajes MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

CREATE TABLE Historia(
    id INT(11) NOT NULL PRIMARY KEY,
    Titulo VARCHAR(30) NOT NULL,
    Descripcion VARCHAR(250) NOT NULL,
    Created_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE Historia MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

CREATE TABLE juego(
  id INT(11) NOT NULL PRIMARY KEY,
  Nivel VARCHAR(20) NOT NULL,
  Vidas VARCHAR(10) NOT NULL,
  personaje VARCHAR(50) NOT NULL,
  Puntaje INT(11) NOT NULL,
  Created_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE juego MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

CREATE TABLE detalleJuego(
    id INT(11) NOT NULL PRIMARY KEY,
    Personajes INT(11) NOT NULL,
    Usurios INT (11) NOT NULL,
    Juego INT(11) NOT NULL,
    Comentarios VARCHAR(650) NOT NULL,
    Created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_Personajes FOREIGN KEY(Personajes) REFERENCES Personajes(id),
    CONSTRAINT fk_Usuarios FOREIGN KEY(Usurios) REFERENCES Usurios(id),
    CONSTRAINT fk_Juego FOREIGN KEY(juego) REFERENCES juego(id)
);

ALTER TABLE detalleJuego MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;