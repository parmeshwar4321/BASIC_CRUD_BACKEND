const db = require('../databaseModels/user')
const bcrypt = require('bcrypt')

exports.getUserData = async (req, res) => {
    await db.find({})
        .exec((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
}

exports.getUserDataId = async (req, res) => {
    await db.findById(req.params.id)
        .exec((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200)
                res.send(data)
            }
        })
}


exports.createUser = async (req, res) => {

    try {
        var securepassword = await bcrypt.hash(req.body.password, 10)
        console.log(req.body);
        const data = await new db(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                contact: req.body.number,
                email: req.body.email,
                password: securepassword
            })
        data.save((err, data) => {
            if (err) throw err
            res.json({ "message": "user created" })
            console.log(data);
        })
    }
    catch (error) { console.log(error) }
}



exports.updateUser = async (req, res) => {
    try {
        securepassword = await bcrypt.hash(req.body.password, 10)


        await db.updateMany({
            _id: req.params.id
        }, {
            $set: {
                email: req.body.email,
                password: securepassword
            }
        })
            .exec((err, data) => {
                if (err) {
                    res.send(err)
                    console.log(err)
                }
                else {
                    res.json({ "message": "User Updated Successfully" })
                    console.log(data)
                }
            })
    }
    catch (error) {
        console.log(error);

    }

}

exports.delelteUser = async (req, res) => {
    try {
        await db.deleteOne({
            _id: req.params.id
        })
            .exec((err, data) => {
                if (err) {
                    res.send(err)
                    console.log(err)
                }
                else {
                    res.json({ "message": "User Deleled Successfully" })
                    console.log(data)
                }
            })


    }
    catch (error) {
        console.log(error);

    }

}






