const express = require("express");
const pool = require("../db");

module.exports = function (app) {
    app.get("/api/continents", async (req, res) => {
        app.use(express.json());

        try {
            res.set('Access-Control-Allow-Origin', '*')
            
            const allContinents = await pool.query(
                "SELECT id, name AS continent FROM world.continents"
            );

            // Send response back to user
            res.json(allContinents.rows);

        } catch (err) {
            console.log(err.message);
        }
    })
};