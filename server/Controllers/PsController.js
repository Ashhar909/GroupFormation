const Problem = require('../Models/problemsS')

exports.addPSpost = (req, res) => {
    const resObj = {
        error:null,
        success: true
    }
    try {
        const obj = {
            ps: req.body.ps,
            domain: req.body.domain,
            Technology: req.body.Technology,
            TeamName: req.body.TeamName,
            // Username: req.user.username, 
        }
        Problem.create(obj)
        .then(() => {
            resObj.success = true;
            res.json()
        })
    } catch (error) {
        console.log(error)
        res.json({"error":error.message});
    }
  }

exports.PSView = async (req,res) => { 
    try {
        const problems = await Problem.find()
        res.json({ps:problems})
    } catch (error) {
        console.log(error)
        res.json({"error":error.message})
    }
    
}

exports.SearchPS = async(req, res) => {
    try {
     let searchTerm = req.body.searchTerm;
     let psStatment = await Problem.find( { $text: { $search: searchTerm, $diacriticSensitive: true}} );
     res.json({psStatment:psStatment})
 } catch (error) {
   res.json({"error":error});
 }    
 }
  