var config = require("./dbconfig");
const sql = require("mssql");

async function getAthlete() {
    try {
        let pool = await sql.connect(config);
        let athlete = await pool.request().query("SELECT * from olympic_winners")
        return athlete.recordset()
    } catch(error) {
        console.log(error)
    }
}

module.exports = {
    getAthlete:getAthlete
}