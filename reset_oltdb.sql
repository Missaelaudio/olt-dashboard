-- ⚠️ Este script elimina todos los datos de las tablas relacionadas con OLT.
-- Úsalo solo en entornos de desarrollo o pruebas.
-- En producción, primero respalda la base y revisa duplicados manualmente.

BEGIN;

-- 1. Eliminar primero las tablas dependientes (Mapping depende de todo lo demás)
TRUNCATE TABLE "Mapping" CASCADE;

-- 2. Luego las tablas intermedias
TRUNCATE TABLE "OdfPort" CASCADE;
TRUNCATE TABLE "Odf" CASCADE;
TRUNCATE TABLE "Divisor" CASCADE;
TRUNCATE TABLE "Chasis" CASCADE;
TRUNCATE TABLE "Edfa" CASCADE;

-- 3. Finalmente las tablas principales
TRUNCATE TABLE "Port" CASCADE;
TRUNCATE TABLE "Olt" CASCADE;

COMMIT;