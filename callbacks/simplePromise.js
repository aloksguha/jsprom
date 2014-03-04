


var num = 4;
var simpleSqrPromise = new Promise(function(resolve, reject){
       resolve(num*num);
       reject();
});

simpleSqrPromise.then(function(data){

    console.log("worked "+data);
}).catch(function(err){ console.log(err);});

