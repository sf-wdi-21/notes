// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/console');

// var Schema = mongoose.Schema;

// /* Console Schema */
// var consoleSchema = new Schema({
// 	name: String,
// 	manufacturer: String,
// 	released: Date 
// });

// /* Game Schema */
// var gameSchema = new Schema({
// 	name: String,
// 	developer: String,
// 	released: Date,
// 	// i'm telling consoles to EXPECT references to Console documents
// 	consoles: [{type: Schema.Types.ObjectId, ref: 'Console'}]
// });

// /* Mongoose Document Methods */
// /* Method that is called from Model*/
// /* Game.findSimilarType(); */
// gameSchema.methods.findSimilarType = function(callback) {
// 	return this.model('Game').find({type: this.type}, callback);
// }

// /* Mongoose Document Statics */
// /* Game.search(...); */
// gameSchema.statics.search = function (name, callback) { 
// 	return this.where('name', new RegExp(name, 'i')).exec(callback);
// }

// /* Compiling my models from my schemas */
// var Game = mongoose.model('Game', gameSchema);
// var Console = mongoose.model('Console', consoleSchema);




// /* make a Console document */
// var nin64 = {
// 	name: 'Nintendo 64',
// 	manufacturer: 'Nintendo',
// 	released: 'September 29, 1996'
// }

// /* make a Game document */ 
// /* Note: consoles is empty */
// var zelda = {
// 	name: 'The Legend of Zelda: Ocarina of Time',
// 	developer: 'Nintendo',
// 	release: new Date('April 27, 2000'),
// 	consoles: []
// }

// /* Create a Console document with the nin64 document */
//  A successfully created Console document lies in success 
// // Console.create(nin64, function(err, nintendo64){
// // 	if(err) {return console.log(err);}
// // 	Game.create(zelda, function(err, zeldaGame) {
// // 		if(err) {return console.log(err);}
// // 		zeldaGame.consoles.push(nintendo64);
// // 		zeldaGame.save();
// // 		console.log('Game success: \n' + zeldaGame);
// // 		process.exit(0);
// // 	});
// // })



// Console.find({}, function(err, success) {
// 	console.log(success);
// })

// Game.find({}, function(err, success) {
// 	console.log(success);
// })
// // Game.findOne({ name: 'The Legend of Zelda: Ocarina of Time' }, function(err, success){
// // 		console.log('Before populate("console") was called: \n'+success);
// // });

// // Game.findOne({ name: 'The Legend of Zelda: Ocarina of Time' }).populate('consoles').exec(function(err, game) {
// // 			if(err){return console.log(err);}
// // 			//console.log(game.name + ' was released on the ' + game.consoles[0].name);
// // 			console.log(game);
// // 		});


// // Game.findOne({ name: 'The Legend of Zelda: Ocarina of Time' }, function(err, success){
// // 		console.log('Before populate("console") was called: \n'+success);
// // });


// // Game.search('Zelda', function(err, success) {
// // 	if(err) {return console.log(err);}
// // 	console.log("Search Result: \n" + success);
// // })

// // var original = new Game({
// // 		name: 'The Legend of Zelda',
// // 		developer: 'Nintendo',
// // 		released: new Date('March 19, 1985'),
// // 		consoles: []
// // 	});

// // original.save();

// // original.findSimilarType(function(err, games){
// // 	if (err) {return console.log(err);}
// // 	console.log("Similar Games: \n");
// // 	games.forEach(function(game) {
// // 		console.log(game.name);
// // 	});
// // });


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/console');

var Schema = mongoose.Schema;

/* Console Schema */
var consoleSchema = new Schema({
	name: String,
	manufacturer: String,
	released: Date 
});

/* Game Schema */
var gameSchema = new Schema({
	name: String,
	developer: String,
	released: Date,
	// i'm telling consoles to EXPECT references to Console documents
	consoles: [{type: Schema.Types.ObjectId, ref: 'Console'}]
});

// /* Mongoose Document Methods */
// /* Method that is called from Model*/
// /* Game.findSimilarType(); */
// gameSchema.methods.findSimilarType = function(callback) {
// 	return this.model('Game').find({type: this.type}, callback);
// }

// /* Mongoose Document Statics */
// /* Game.search(...); */
// gameSchema.statics.search = function (name, callback) { 
// 	return this.where('name', new Regexp(name, 'i')).exec(callback);
// }

/* Compiling my models from my schemas */
var Game = mongoose.model('Game', gameSchema);
var Console = mongoose.model('Console', consoleSchema);

// /* make a Console document */
var nin64 = {
	name: 'Xbox',
	manufacturer: 'Microsoft',
	released: 'September 29, 1996'
}

/* make a Game document */ 
var zelda = {
	name: 'The Legend of Zelda: Majoras Mask',
	developer: 'Nintendo',
	release: new Date('April 27, 2000'),
	consoles: []
}

/* Create a Console document with the nin64 document */
/* A successfully created Console document lies in success */
// Console.create(nin64, function(err, nintendo64){
// 	if(err) {return console.log(err);}
// 	Game.create(zelda, function(err, zeldaGame) {
// 		if(err) {return console.log(err);}
// 		zeldaGame.consoles.push(nintendo64);
// 		zeldaGame.save();
// 		console.log('Game success: \n' + zeldaGame);
// 	});
// })

// Game.find({}, function(err, success) {
// 	console.log(success);
// })
Game.findOne({ name: 'The Legend of Zelda: Majoras Mask' })
		.populate('consoles')
		.exec(function(err, game) {
			if(err){return console.log(err);}
			console.log(game.name + ' was released on the ' + game.consoles[0].name);
			console.log(game);
		});

// Console.remove({}, function(err, success) {
// 	if(err) { return console.log(err);}
// 	console.log("Successfully removed Console");
	
// });
// Game.remove({}, function(err, success) {
// 	if(err) { return console.log(err);}
// 	console.log("SUccessfully removed Game");
// });



