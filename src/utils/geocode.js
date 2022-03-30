const request = require('request')
async function funOperation(city,res){
    const loc = city;
    const url = 'http://api.weatherstack.com/current?access_key=dc0a06f5ce1f5c79b98ed331deba8b1b&query='+loc;
    return doRequest(url)
}

function doRequest(url) {
    return new Promise(function (resolve, reject){
        request(url, function (error, res, body){
            if(!error && res.statusCode == 200){
                resolve(JSON.parse(body));
            }else{
                console.log('hello is there error')
                reject(error);  
            }
        });
    });
}

module.exports = { funOperation:funOperation }

