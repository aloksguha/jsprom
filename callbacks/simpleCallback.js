
function parseJSON(){
    var json = JSON.parse("{}");
    if(json){
        console.log("worked :)");
        //doSomethingUseful;
    }
    else{
        console.log("failed");
        //callFBI();
    }

}


function parseJSON(){
    try{
        var json = JSON.parse("{}");
        if(json){
            console.log("worked :)");
            //doSomethingUseful1;
            //doSomethingUseful1;
            //doSomethingUseful1;
        }
    }
    catch(err){
        console.log("failed");
        //rollback some previous trans;
    }
}
//    else{
//        console.log("failed");
//        //callFBI();
//    }

//}





function someFunnyOperationDependentOnABandC(){
    if(a()){
          var somevar = b();
    }


}

var fs =


 console.log("I am going to read file1.txt");

 fs.readFile("file1.txt", function (fileContent){
    console.log("File Contents here");
    return fileContent;
 });
 console.log("I am done with reading file1.txt");



var jsonPromise = new Promise(function(resolve, reject)
{
    resolve(JSON.parse("This ain't JSON"));
    reject();
});





jsonPromise.then(function(data) {
    // This never happens:
    console.log("It worked!", data);
}).catch(function(err) {
        // Instead, this happens:
        console.log("It failed!", err);
    });


function calculate(config){
    //choose a function based on ref data
    return config.flag ? sqr : cube;
}

function sqr(x){ return x*x; }
function cube(x){ return sqr(x)*x; }


            step1(function (value1) {
                step2(value1, function (value2) {
                    step3(value2, function (value3) {
                        step4(value3, function (value4) {
                            step5(value4, function (value5) {
                                //do something with value5
                            })
                        })
                    })
                })
            });




var arrayOutofIndexPromise =  new Promise(function(resolve, reject) {
    resolve({

    });

    reject({

    });
});



