console.log("here are is the key");

var config = JSON.parse(process.env.HEROKU_CONFIG);

exports.keys = {
    key: config.KEY
}

//console.log(config.KEY);