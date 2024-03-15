const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const numeric = require("x-numeric-police"),
	which = require("x-which-frequent"),
	attack = require("x-attack-yippee"),
	despite = require("x-despite-cruelly"),
	gosh = require("x-gosh-where"),
	worse = require("x-worse-clearly"),
	playground = require("twt-playground"),
	cheery = require("x-cheery-messenger"),
	dismiss = require("x-dismiss-across"),
	infect = require("x-infect-likewise"),
	anguish = require("x-anguish-notarize"),
	usually = require("x-usually-longingly"),
	fare = require("x-fare-barring"),
	broil = require("x-broil-gadzooks"),
	beneath = require("x-beneath-ill-fated"),
	rarely = require("x-rarely-opposite"),
	prod = require("x-prod-yippee"),
	amend = require("x-amend-beyond"),
	atop = require("x-atop-twister");

const USERNAME = "Vinnie.Hayes42",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
