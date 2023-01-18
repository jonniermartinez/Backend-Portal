const mongoose = require('mongoose');

// Esto es mejor meterlo en variables de entornor
const password = "jonnier";

const MONGO_URL = `mongodb+srv://jonnier:${password}@cluster0.kyhge3e.mongodb.net/?retryWrites=true&w=majority`;

const db = async () => {
    mongoose.set("strictQuery", false);
    await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Base de datos funcionando"))
    .catch((error) => console.error(error))
}

module.exports = db;