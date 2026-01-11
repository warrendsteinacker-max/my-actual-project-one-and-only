

const login = async(error, req, res, next) => {
    const {email, pas} = req.body

    const ismatch = await Users.findOne({email})

    if(ismatch){
        res.status(400).json({error: error.message})
    }

    const isuser = await bcrypt.compaire(pas, this.password)

    if(!isuser){
        res.status(400).json({error: error.message})  
    }

    next()
}

///////