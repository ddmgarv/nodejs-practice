const EventEmmitter = require("events");

class Logger extends EventEmmitter {
  execute(cb) {
    console.log("Before");
    this.emit("start");
    cb();
    this.emit("finish");
    console.log("After");
  }
}

const logger = new Logger();

logger.on("start", () => console.log("Starting"));
logger.on("finihs", () => console.log("Finishing"));
logger.on("finish", () => console.log("It's done"));

logger.execute(() => console.log("Hello World!"));
