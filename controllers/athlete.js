const pool = require('../helpers/database');

module.exports = {
    getAllData: async function (req, res) {
        try {
            const limit = 20
            const page = req.query.page || 1
            const offset = (page - 1) * limit
            
            const sqlQuery = "SELECT olympic_winners.id, athlete,age,countries.name AS country,country_group, year, date,sports.name AS sport, gold,silver,bronze,total FROM olympic_winners LEFT JOIN countries ON olympic_winners.countryId = countries.id LEFT JOIN sports ON olympic_winners.sportId=sports.id limit "+limit+" OFFSET "+offset;
            const rows = await pool.query(sqlQuery);
            res.status(200).json(rows);
        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    postData: async function (req, res) {
        try {
            let data = {
                athlete: req.body.athlete,
                age: req.body.age,
                countryId: req.body.country,
                year: req.body.year,
                date: req.body.date,
                sportId: req.body.sportId,
                gold: req.body.gold,
                silver: req.body.silver,
                bronze: req.body.bronze,
                total: req.body.total
            };
            let sqlQuery = "INSERT INTO olympic_winners SET ?";
            let rows = await pool.query(sqlQuery, data)
            res.status(200).json(rows);
        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    updateData: async function (req, res) {
        try {
            let sqlQuery = "UPDATE olympic_winners SET athlete='" + req.body.athlete + "',age='" + req.body.age + "',countryId='" + req.body.countryId + "', year='" + req.body.year + "',date='" + req.body.date + "',sportId='" + req.body.sportId + "', gold='" + req.body.gold + "',  silver='" + req.body.silver + "', bronze='" + req.body.bronze + "',total='" + req.body.total + "' WHERE product_id=" + req.body.id;
            const rows = await pool.query(sqlQuery);
            res.status(200).json(rows);
        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    deleteData: async function (req, res) {
        try {
            let sqlQuery = "DELETE FROM olympic_winners WHERE id=" + req.body.product_id + "";
            const rows = await pool.query(sqlQuery);
            res.status(200).json(rows);
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}