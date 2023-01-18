const Logs = require("../model/logs")
const newLog = async (req, res) => {
    const { url } = req.body;
    const nuevoLog = new Logs({
        url
    });
    nuevoLog.save()
    .then((log) => {
        res.json( { mensaje : "Log creado correctamente", log});
    })
}

module.exports = newLog;