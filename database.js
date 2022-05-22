const mongoose = require('mongoose');

module.exports = {
    async mongoatlasconnect(){
        try {
            const connection = await mongoose.connect(process.env.MONGO_URL);
            console.log("Database Connected 🔥");
        } catch (error) {
            console.log(error);
        }
    }
}