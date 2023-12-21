const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	user_id:{
		type: mongoose.Schema.Types.ObjectId,
		ref:"user"
	},
	data:String,
	likes:{
		type:Number,
		default:0	
	},
	title:String,
	date:{
		type : Date,
		require : true,
		default : Date.now
	}
})

module.exports = mongoose.model("blog",schema);