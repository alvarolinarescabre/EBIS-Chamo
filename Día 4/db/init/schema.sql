-- init/schema.sql
-- (Ejecutado dentro de la DB ya creada por POSTGRES_DB)

-- Creamos la tabla si no existe
CREATE TABLE IF NOT EXISTS visitas (
  id SERIAL PRIMARY KEY,
  contador INT NOT NULL DEFAULT 0
);

-- Insertamos la fila inicial (id=1)
INSERT INTO visitas (id, contador)
  VALUES (1, 0)
  ON CONFLICT (id) DO NOTHING;
