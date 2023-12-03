# question_1( Building Three API Endpoints with Database Interaction)
1) open terminal npm init
2) install npm packages mongoose, express(npm i express mongoose body-parser)
3) install nodemon to avoid restating server whenver changes are made
5) here database i used is mongoDB so it need to be installed in your pc
6) as there is option for online database MongoDB .but i have MongoDB already installed and in question there was no mention so i avoid online version of mongoDB
7) type command "nodemon index.js" to start server and connect to database
8) you also need api testing tools such as Postman, or thunderclient 
9) change content-type application/json
10) in body provide some books and hit postrequest api 
11) similary test other two api get and put request

books schema is
const BookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	authors: [{
		type: String,
		required: true,
	}],
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


