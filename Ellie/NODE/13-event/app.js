const EventEmitter = require("events");
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log("first callback - ", args);
};

emitter.on("ellie", callback1);

emitter.on("ellie", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("ellie", { message: 1 });
emitter.emit("ellie", { message: 2 });
// emitter.removeListener("ellie", callback1);
emitter.removeAllListeners();
emitter.emit("ellie", { message: 3 });

// emit을 사용하면 특정 이벤트를 만들 수 있는 것 같다. 지금 위의 코드는
// ellie라는 이벤트를 만든 것이다.
