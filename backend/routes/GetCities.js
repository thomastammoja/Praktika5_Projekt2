const express = require("express");
const pool = require("../db");

module.exports = function (app) {
    app.get("/api/continents/countries/:id/cities", async (req, res) => {
        app.use(express.json());

        try {
            res.set('Access-Control-Allow-Origin', '*')
            
            // Countries id
            const { id } = req.params;

            const allCities = await pool.query(
                "SELECT name AS city, latitude, longitude FROM world.cities WHERE country_id = $1 ORDER BY name",
                [id]
            );

            // Send response back to user
            res.json(allCities.rows);

        } catch (err) {
            console.log(err.message);
        }
    })
};