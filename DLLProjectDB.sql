-- drop database if exists ProjectDB;
-- create database ProjectDB;
use ProjectDB;

create Table USER(
	username varchar(30) not null PRIMARY KEY,
    Name varchar(60), LastName varchar(60), Email varchar(60), Password varchar(60),state boolean,
    created_at datetime, updated_at datetime
);

create Table PET(
	id int auto_increment PRIMARY KEY,
    name varchar(40), especie varchar(10), gender varchar(10), edad int, caracteristica varchar(50),
    state boolean, estado varchar(10),
    created_at datetime, updated_at datetime
);

create Table UBICATION(
	id varchar(10) not null PRIMARY KEY,
    latitud float, longitud float, state boolean,
    direccion varchar(50), created_at datetime, updated_at datetime

);
create Table LOSS_RECORD(
	id int auto_increment PRIMARY KEY,
    username varchar(30), mascota int, ubicacion varchar(10), telefono varchar(10),
	contacto varchar(50), created_at datetime, updated_at datetime,
    state boolean,
    FOREIGN KEY (username) References USER(username),
	FOREIGN KEY (mascota) References PET(id),
	FOREIGN KEY (ubicacion) References UBICATION(id)
);
create Table NEED_RECORD(
	id int auto_increment PRIMARY KEY,
    username varchar(30), mascota int, tipo varchar(10), telefono varchar(10),
	contacto varchar(50), correo varchar(50), created_at datetime, updated_at datetime,
    state boolean,
    FOREIGN KEY (username) References USER(username),
	FOREIGN KEY (mascota) References PET(id)
);
create Table FOUNDATION(
	id int auto_increment PRIMARY KEY,
    nombre varchar(30), descripcion varchar(100), telefono varchar(10),ubicacion varchar(10),
	state boolean,created_at datetime, updated_at datetime,
	FOREIGN KEY (ubicacion) References UBICATION(id)
);
