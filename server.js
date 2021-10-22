const app = require("./app");
const mongoose = require("mongoose");

(async () => {

    try {
        await mongoose.connect("mongodb+srv://Rahul:luharletod@cluster0.mysch.mongodb.net/hamrofootball?retryWrites=true&w=majority")
        console.log("database connected successfully");
    } catch (err) {
        console.log(err);
    }
})();

const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
    console.log(`Sever started on PORT ${PORT}`);
})