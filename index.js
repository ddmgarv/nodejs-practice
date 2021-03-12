"use strict";
const createMultiplyTable = require("./utils/createMultiplyTable");
const yargs = require("./config/yargs");

const command = yargs._[0];

switch (command) {
	case "create":
		createMultiplyTable(yargs);
		break;

	default:
		break;
}
