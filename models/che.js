const mongoose = require('mongoose');

const cheSchema = new mongoose.Schema({
	eName:{
		type:String,
		required:true
	},
	cName:{
		type:String,
		required:true
	},
	des:{
		type:String,
		required:true
	},
	aPoint:{
		type:Number,
		required:true
	},
	bPoint:{
		type:Number,
		required:true
	},
	cPoint:{
		type:Number,
		required:true
	}
})

const che = mongoose.model('che',cheSchema);

module.exports = che;