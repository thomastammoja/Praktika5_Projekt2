const express = require("express");
const pool = require("../db");

module.exports = function (app) {
    app.post("/api/add/city", async (req, res) => {
        app.use(express.json());

        try {
            res.set('Access-Control-Allow-Origin', '*')

            // Take values from request body
            const { name } = req.body;
            const { country_id } = req.body;

            const newCity = await pool.query(
                "INSERT INTO world.cities (name, country_id) VALUES ($1, $2) RETURNING *",
                [name, country_id]
            );
            // Send response back to user
            res.json(newCity.rows[0]);

        } catch (err) {
            console.log(err.message);
        }
    })
};