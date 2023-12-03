const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// eslint-disable-next-line new-cap
const BookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	authors: {
		type: String,
		required: true,
	},
	publisher: {
		type: String,
		required: true,
	},
	genre: [{
		type: String,
		required: true,
	}],
	summary: {
		type: String,
	},
});

module.exports = mongoose.model('Book', BookSchema);