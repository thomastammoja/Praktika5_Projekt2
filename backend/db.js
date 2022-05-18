const Pool = require("pg").Pool;

module.exports = new Pool({
    user: "ruuvi_sel",
    password: "ruuvisel",
    host: "dev.vk.edu.ee",
    port: 5432,
    database: "db_Tammoja"
});