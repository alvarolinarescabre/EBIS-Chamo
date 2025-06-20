-- init/schema.sql

CREATE DATABASE IF NOT EXISTS ejemplo;
USE ejemplo;

-- Ensure user is gone before creating
DROP USER IF EXISTS 'usuario'@'%';

-- Create user with mysql_native_password plugin
CREATE USER 'usuario'@'%' 
  IDENTIFIED WITH mysql_native_password 
  BY 'clave123';

GRANT ALL PRIVILEGES ON ejemplo.* TO 'usuario'@'%';
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS visitas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contador INT NOT NULL DEFAULT 0
);

INSERT INTO visitas (contador) 
  VALUES (0)
  ON DUPLICATE KEY UPDATE contador = contador;
