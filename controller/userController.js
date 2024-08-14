const fetch = async(req, res) => {
    try {
        res.json("helllo mongo db");

    } catch (error) {
        res.status(500).json({ error: "internal server error" });

    }
}

module.exports = fetch;