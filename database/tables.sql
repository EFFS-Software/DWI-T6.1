-- Active: 1700416544892@@dpg-cld4h8ngsrdc73filr8g-a.oregon-postgres.render.com@5432@ts6_1_db

DO $$ BEGIN 
-- TABLA "TBL_ROLES" 
	-- TABLA "TBL_ROLES"
	-- Tabla "tbl_roles"
	DROP TABLE IF EXISTS tbl_roles CASCADE;
	CREATE TABLE
	    IF NOT EXISTS tbl_roles (
	        id SERIAL PRIMARY KEY,
	        name_rol VARCHAR(255),
	        is_active BOOLEAN DEFAULT true,
	        create_date TIMESTAMP DEFAULT current_timestamp,
	        update_date TIMESTAMP,
	        delete_date TIMESTAMP
	    );
	-- Tabla "tbl_usuarios"
	DROP TABLE IF EXISTS tbl_usuarios CASCADE;
	CREATE TABLE
	    IF NOT EXISTS tbl_usuarios (
	        id SERIAL PRIMARY KEY,
	        correo VARCHAR(255),
	        nombre VARCHAR(255),
	        apellido VARCHAR(255),
	        identidad VARCHAR(15),
	        contrasenia VARCHAR(255),
	        id_rol int REFERENCES tbl_roles(id),
	        is_active BOOLEAN DEFAULT true,
	        create_date TIMESTAMP DEFAULT current_timestamp,
	        update_date TIMESTAMP,
	        delete_date TIMESTAMP
	    );
	end $$ 
