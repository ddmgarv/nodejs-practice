const fs = require("fs").promises;
const colors = require("colors");

const createMultiplyTable = async ({ b: base = 1, l: list = false, u: until = 10 }) => {
	try {
		let output = "";

		for (let i = 1; i <= until; i++) {
			output += `${base} * ${i} = ${base * i} \n`;
		}

		if (list) {
			console.log(colors.green("=================="));
			console.log(colors.red(`MULTIPLY TABLE: ${base}`));
			console.log(colors.green("=================="));
			console.log(colors.white(output));
		}

		await fs.writeFile(`./output/table-${base}.txt`, output);

		return `table-${base}.txt`;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	createMultiplyTable,
};
