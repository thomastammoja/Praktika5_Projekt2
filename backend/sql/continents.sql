/**
 * 'geo_continents' Table
 * @author Sagun Khosla <sagunxp@gmail.com>
 * Modified: Changed table name, formatted scripts to work in PostgreSQL
 * Modified by: Thomas Tammoja
 */

DROP TABLE IF EXISTS world.continents;
CREATE TABLE world.continents (
	id 				SERIAL PRIMARY KEY,
	name 			VARCHAR(255) NOT NULL
);


INSERT INTO world.continents (id, name) VALUES 
(1, 'North America'),
(2, 'Asia'),
(3, 'Africa'),
(4, 'Europe'),
(5, 'South America'),
(6, 'Oceania'),
(7, 'Antarctica');


-- Synchronize sequence values (Primary Index values)
SELECT setval(pg_get_serial_sequence('world.continents', 'id'), coalesce(max(id),0) + 1, false) FROM world.continents;