const User = require("../models/User");

module.exports = {
  AllUsers: async (req, res) => {
    try {
      const Users = await User.find({});
      return res.status(200).json({
        Users,
      });
    } catch (error) {
      return res.json({
        error: error.message,
      });
    }
  },

  addUser: async (req, res) => {
    try {
      const { username, email } = req.body;

      const result =
        (await User.findOne({ username })) || (await User.findOne({ email }));

      if (result) {
        return res.status(400).json({
          error: "This user already exists",
        });
      }
      console.log(req.body);

      await User.create(req.body);

      res.status(201).json({
        success: "User Added successfully",
      });
    } catch (error) {
      return res.json({
        error: error.message,
      });
    }
  },
  UserGroupAssign: async (req, res) => {
    try {
      const { ids } = req.body;

      ids.forEach(async(id)=>{
        const queryCondition = { _id: id }; 
        const updateOperation = { $set: { usergroup: 'Manager' } }; 
        const new_user = await User.findOneAndUpdate(queryCondition, updateOperation, { new: true })
        console.log(new_user);
      })

      res.status(200).json({
        success: "Users Edited successfully",
      });
    } catch (error) {
      return res.json({
        error: error.message,
      });
    }
  },
};
