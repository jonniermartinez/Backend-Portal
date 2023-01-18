const Logs = require("../model/logs")

const getLogs = async (req, res) => {
    // const  { nombre, url }  = req.params;

    Logs.find({}, (err, docs) => {
        if (err) {
            console.error(err);
        }else{
            res.json({ mensaje : "Todos los logs", docs})
        }
    })

}

module.exports = getLogs;