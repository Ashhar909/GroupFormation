const Notification = require('../Models/notifications')
const User = require('../Models/user')

exports.getMentors = async (req, res) => {
    let obj = {
        mentors:null,
        error:null,
    }
    try {
        User.find({"isMentor":true})
        .then((res)=> {
            // console.log(res)
            obj.mentors = res
            res.json(obj)
        }).catch((error) => {
            obj.error = error.message
            res.json(obj)
        })    
    } catch (error) {
        obj.error = "Internal Server Error"
        res.json(obj)
    }
}

// exports.requestMentor = async