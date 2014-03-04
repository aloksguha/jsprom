/**
 * Created with JetBrains WebStorm.
 * User: alokguha
 * Date: 04/03/14
 * Time: 2:16 PM
 * To change this template use File | Settings | File Templates.
 */



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
