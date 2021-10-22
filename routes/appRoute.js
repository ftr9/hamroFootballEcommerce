const router = require("express").Router();

const returnLists = require("../utils/sendLists");
router.get("/list/:parameter", async (req, res) => {

    try {
        const lists = await returnLists(req.params.parameter);
        res.status(200).json({ status: "success", data: lists });
    } catch (err) {
        res.status(404).json({ status: "fail", err: err.message });
    }
})

module.exports = router;