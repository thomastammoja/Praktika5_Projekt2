ALTER TABLE world.cities
    ADD CONSTRAINT country_id_foreign FOREIGN KEY (country_id)
    REFERENCES world.countries (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE world.countries
    ADD CONSTRAINT continent_id_foreign FOREIGN KEY (continent_id)
    REFERENCES world.continents (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;