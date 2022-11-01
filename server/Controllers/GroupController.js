const User = require('../Models/user');
const bcrypt = require('bcryptjs')

exports.getGroup = async(req,res) =>{
    try {
        const grp = req.body.grp;
        // console.log(grp);
        const grpMembers = await User.find({group:grp});
        res.json(grpMembers);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
    
}

exports.createGroup = async (req,res) => {
    try {
        const userID = req.user.id;
        const {group, groupPass} = req.body;

        // * hash the grp pass
        const salt = await bcrypt.genSalt(10);
        const secureGrpPassword = await bcrypt.hash(groupPass,salt); 

        let user = await User.findOne({_id:userID});
        if(user.group){
            return res.status(400).json({err:"Please leave the previous group"})
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
        ).then(()=>{
            console.log("group created")
            res.json({status: "success"})
        }).catch((err)=>{
            console.log(err.message);
            res.status(400).send({err:"use valid grp password"});
        })

        // res.send({group, secureGrpPassword});
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

exports.leaveGroup = async (req,res) => {
    
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
        ).then(()=>{
            console.log("group left")
            res.json({status: "success exit"})
        }).catch((err)=>{
            console.log(err.message);
            res.status(400).send({err:"could not leave"});
        })
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}


exports.joinGroup = async (req, res) => {
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
            return res.status(400).send({err:"invalid group creds"});
        }

        // * chk if already a member of any other group
        let user = await User.findOne({_id:userID});
        if(user.group){
            return res.status(400).json({err:"Please leave the previous group"})
        }
        
        let DbPassword = userLead.groupPass;
        let comparePass = await bcrypt.compare(password,DbPassword);

        if(!comparePass){
            return res.status(400).send({err:"Incorrect Password"});
        }

        User.updateOne({_id:userID},
        {
            $set: {
                group:grpToJoin
            }
        }).then(()=>{
            console.log("group joined")
            res.json({status: "updated"})
        }).catch((err)=>{
            res.status(400).send({err:"use valid grp password"});
            console.log(err.message);
        })
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}