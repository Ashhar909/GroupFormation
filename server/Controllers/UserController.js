const User = require('../Models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// TODO move secret and port to env file
const {Secret} = require('../Middleware/FetchUser')


exports.createUser = async(req,res) => {
    // create encrypted password
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password,salt);

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:securePassword,
    })

    user.save()
    .then(()=>{
        const uniqueData = {
            id:user._id
        }
        const token = jwt.sign(uniqueData,Secret);
        console.log("Saved");
        res.json(token);
    })
    .catch((err)=>{
        res.send(err.msg);
    })
}

exports.login = async(req,res)=>{

    try {
        const {email, password} = req.body;
        let user = await User.findOne({email:email})
        let DbPassword = user.password

        if(!user){
            res.status(400).send({err:"use valid email"})
        }

        let comparePass = await bcrypt.compare(password,DbPassword);
        // console.log(comparePass);
        if(!comparePass){
            res.status(400).send({err:"Incorrect Password"});
        }
        else{
            const uniqueData = {
                id:user._id
            }
            const token = jwt.sign(uniqueData,Secret);
            console.log("LOGGED IN");
            res.json({token,user});
        }
    } catch (error) {
        res.send(error.message)
    }
    
}

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
            res.status(400).send({err:"invalid group creds"});
        }
        
        let DbPassword = userLead.groupPass;
        let comparePass = await bcrypt.compare(password,DbPassword);

        if(!comparePass){
            res.status(400).send({err:"Incorrect Password"});
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