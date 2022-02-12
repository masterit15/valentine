const User = require('../models/user.model')
class UserControllers {
  async addUser(req,res){
    const {name, departamentId} = req.body
    console.log(req.body);
    try {
      const user = await User.create({
        name, 
        departamentId
      }); 
      res.status(200).json({
        success: true,
        user
      })
    } catch (error) {
      
      res.status(400).json(error)
    }
  }
  getUser(req,res){
    
  }
}

module.exports = new UserControllers