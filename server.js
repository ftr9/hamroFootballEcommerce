const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: './config/keys.env' });

(async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully");
    } catch (err) {
        console.log(err);
    }
})();

const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
    console.log(`Sever started on PORT ${PORT}`);
})