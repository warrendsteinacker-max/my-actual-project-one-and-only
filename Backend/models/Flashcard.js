

const login = async(req, res, next) => {
    const {email, pas} = req.body

    const ismatch = await Users.findOne({email})
}