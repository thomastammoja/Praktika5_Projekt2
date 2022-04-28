const express = require("express");
const pool = require("../db");

module.exports = function (app) {
    app.get("/api/continents/:id/countries", async (req, res) => {
        app.use(express.json());

        try {
            res.set('Access-Control-Allow-Origin', '*')
            
            // Continent id
            const { id } = req.params;

            const allCountries = await pool.query(
                "SELECT id, name AS country FROM world.countries WHERE continent_id = $1 ORDER BY name",
                [id]
            );

            // Send response back to user
            res.json(allCountries.rows);

        } catch (err) {
            console.log(err.message);
        }
    })
};