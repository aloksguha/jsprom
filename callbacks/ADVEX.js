var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;
    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started (<small>Sync code started</small>)<br/>');
    var p1 = new Promise(               /* We make a new promise: we promise the string 'result' (after waiting 3s) */
        function(resolve, reject) {       /* The resolver function is called with the ability to resolve or reject the promise */

            log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise started (<small>Async code started</small>)<br/>');

            window.setTimeout(              /* This only is an example to create asynchronism */
                function() {
                    resolve(thisPromiseCount); /* We fulfill the promise ! */
                }, Math.random() * 2000 + 1000);
        });

    p1.then(                            /* We defines what to do when the promise is fulfilled */
        function(val) {                   /* Just log the message and a value */
            log.insertAdjacentHTML('beforeend', val + ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)<br/>');
}