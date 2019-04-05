(function () {
    let { Observable} = require('rxjs');
    let os = require('os');

    const obser$ = Observable.create(
        (observ) => {
            observ.next("Checking your system...");

            //console.log(os.totalmem());
            //console.log(os.cpus().length);

            if (os.totalmem() < 4 * 1024 * 1024 * 1024){
                observ.next("This app needs at least 4Gb of RAM");
                observ.complete();
            }

            if (os.cpus().length < 2){
                observ.next("Processor is not supported");
                observ.complete();
            }

            observ.next("System is checked successfully.");
        }
    );

    const subscribe = obser$.subscribe(
        (x)=>{console.log(x);},
        (err)=>{console.error(err);},
        ()=>{console.log('done');}
    );

})(); 