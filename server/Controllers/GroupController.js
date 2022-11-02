const User = require('../Models/user');
const bcrypt = require('bcryptjs')

exports.getGroup = async(req,res) =>{
    let obj = {
        error:null,
        user:null,
        grp:null
    }
    try {
        const userID = req.user.id;
        let user = await User.findById(userID)
        obj.user = user;
        const grp = user.group
        
        if(!grp){
            obj.error = "Yet to join a group";
            return res.json(obj);
        }
        const grpMembers = await User.find({group:grp});

        obj.grp = grpMembers;
        res.json(obj);

    } catch (error) {
        obj.error = "Internal Server Error"
        res.status(500).json(obj);
    }
}

exports.createGroup = async (req,res) => {
    let obj = {
        error:null,
        user:null
    }
    try {
        const userID = req.user.id;
        let {group, groupPass} = req.body;
        group = group.toLowerCase();

        // * hash the grp pass
        const salt = await bcrypt.genSalt(10);
        const secureGrpPassword = await bcrypt.hash(groupPass,salt); 

        let user = await User.findOne({_id:userID});
        if(user.group){
            obj.error = "Please leave the previous group"
            return res.status(400).json(obj);
        }

        let exists = await User.findOne({group})
        if(exists){
            obj.error = "group name taken";
            return res.status(400).json(obj);
        }
        
        // console.log(user, secureGrpPassword);
        User.updateOne(
            {_id: userID,},
            {
                $set:{
                    group,
                    groupPass:secureGrpPassword,
                    isLeader:true
                }
            }
        ).then(async ()=>{
            console.log("group created")
            user = await User.findOne({_id:userID});
            obj.user = user;
            res.json(obj)
        }).catch((err)=>{
            console.log(err.message);
            obj.error = "use valid grp password"
            res.status(400).json(obj);
        })

        // res.send({group, secureGrpPassword});
    } catch (error) {
        obj.error = "Internal server error"
        res.status(500).json(obj);
    }
}

exports.leaveGroup = async (req,res) => {
    let obj = {
        error:null,
        user:null
    }
    try {
        const userID = req.user.id;
        User.updateOne(
            {_id: userID,},
            {
                $set:{
                    group:null,
                    groupPass:null,
                    isLeader:false
                }
            }
        ).then(async ()=>{
            console.log("group left")
            let user = await User.findOne({_id:userID});
            obj.user = user;
            res.json(obj)
        }).catch((err)=>{
            console.log(err.message);
            obj.error = err.message
            res.status(400).json(obj);
        })
    } catch (error) {
        obj.error = "Internal Server error"
        res.status(500).json(obj);
    }
}


exports.joinGroup = async (req, res) => {
    let obj = {
        error:null,
        user:null
    }
    try {
        const grpToJoin = req.body.group.toLowerCase();
        const userID = req.user.id;
        const password = req.body.groupPass;

        let userLead = await User.findOne(
            {
                "group":grpToJoin, 
                "isLeader":true
            }
        );

        if(!userLead){
            obj.error = "invalid group creds"
            return res.status(400).json(obj);
        }

        // * chk if already a member of any other group
        let user = await User.findOne({_id:userID});
        if(user.group){
            obj.error = "Please leave the previous group"
            return res.status(400).json(obj);
        }
        
        let DbPassword = userLead.groupPass;
        let comparePass = await bcrypt.compare(password,DbPassword);

        if(!comparePass){
            obj.error = "invalid password"
            return res.status(400).json(obj);
        }

        User.updateOne({_id:userID},
        {
            $set: {
                group:grpToJoin
            }
        }).then(async ()=>{
            console.log("group joined")
            user = await User.findOne({_id:userID})
            obj.user = user;
            res.json(obj);
        }).catch((err)=>{
            console.log(err.message);
            obj.error = err.message
            res.status(400).json(obj);
        })
    } catch (error) {
        obj.error = "Internal Server error"
        res.status(500).json(obj);
    }
}