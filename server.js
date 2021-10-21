const app = require("./app");


const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
    console.log(`Sever started on PORT ${PORT}`);
})