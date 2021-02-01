CREATE DATABASE summerski;
USE summerski;
-- TABLE USER
-- all pasword wil be encrypted using SHA1
  CREATE TABLE Usurios (
    id INT(11) NOT NULL PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    edad VARCHAR(100) NOT NULL,
    estado tinyint(1) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp
  );

  ALTER TABLE Usurios MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE Personajes(
    id INT(11) NOT NULL PRIMARY KEY,
    Nombre VARCHAR(50),
    edad VARCHAR(30),
    estatura VARCHAR(30),
    created_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE Personajes MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

CREATE TABLE Trampas(
    id INT(11) NOT NULL PRIMARY KEY,
    Nombre VARCHAR(30) NOT NULL,
    Descripcion VARCHAR(150) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE Trampas MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

CREATE TABLE juego(
  id INT(11) NOT NULL PRIMARY KEY,
  Descripcion VARCHAR(150) NOT NULL,
  nivel VARCHAR(20) NOT NULL,
  vidas VARCHAR(10) NOT NULL,
  puntaje INT(11) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE juego MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

CREATE TABLE detalleJuego(
    id INT(11) NOT NULL PRIMARY KEY,
    Trampas INT(11) NOT NULL,
    Personajes INT(11) NOT NULL,
    Usurios INT (11) NOT NULL,
    juego INT(11) NOT NULL,
    Comentarios VARCHAR(150) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_Trampas FOREIGN KEY(Trampas) REFERENCES Trampas(id),
    CONSTRAINT fk_Personajes FOREIGN KEY(Personajes) REFERENCES Personajes(id),
    CONSTRAINT fk_Usuarios FOREIGN KEY(Usurios) REFERENCES Usurios(id),
    CONSTRAINT fk_Juego FOREIGN KEY(juego) REFERENCES juego(id)
);

ALTER TABLE detalleJuego MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;