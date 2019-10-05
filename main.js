var seneca = require('seneca')();


//creating actions
seneca.add({
  role: "accountManagement",
  cmd: "login"
}, function(msg, respose) {
  respose(null, {
    message: `Login in ${msg.username}`
  });
});


seneca.add({
  role: "accountManagement",
  cmd: "register"
}, function(msg, respose) {
  respose(null, {
    message: `Login in ${msg.username}`
  });
});

//invoking actions
seneca.act({
  role: "accountManagement",
  cmd: "login",
  username: "geenath",
  password: "geenath",
}, function(error, respose) {
  if (error) return console.error(error);
  console.log("register respose", respose.message);
});



seneca.act({
  role: "accountManagement",
  cmd: "register",
  username: "geenath",
  password: "geenath",
}, function(error, respose) {
  if (error) return console.error(error);
  console.log("register respose", respose.message);
});
