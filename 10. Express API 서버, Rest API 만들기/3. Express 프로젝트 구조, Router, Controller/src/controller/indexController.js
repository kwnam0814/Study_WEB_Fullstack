exports.dummy = function (req, res) {
    return res.send("It works.");
};

exports.postLogic = function (req, res) {
    const { name } = req.body;
    return res.send(name);
};