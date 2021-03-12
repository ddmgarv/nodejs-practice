const argv = require("yargs")
	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: "Base for creating table",
	})
	.option("l", {
		alias: "list",
		type: "boolean",
		demandOption: false,
		describe: "Log created table",
	})
	.option("u", {
		alias: "until",
		type: "number",
		demandOption: false,
		describe: "Number to create table until reached the number",
	})
	.check((argv, options) => {
		console.log("yargs", argv);
		if (isNaN(argv.b)) {
			throw "The base must be of type Number";
		}
		return true;
	})
	.help().argv;

module.exports = argv;
