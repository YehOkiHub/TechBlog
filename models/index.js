const userModel = require("./users");
const blogModel = require("./blog");

userModel.hasMany(blogModel, {
    onDelete:'cascade'
});

blogModel.belongsTo(userModel, {
    foreignKey:'user_id'
});


module.exports = { userModel, blogModel };
