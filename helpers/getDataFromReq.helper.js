const getDataFromReqHelper = (req) => {
    return {
        body: req.body,
        id: req.params.id,
        ...req.body
    }
}

module.exports = getDataFromReqHelper;