let d;

const stopInterval = setInterval(function(){
    d = new Date();
    console.log(d.toLocaleTimeString());
}, 1000);
// every 100 milisecond or 1 second

//it will go on forever it left like this
//so I will stop it after 10 seconds so that
//I don't have to do it manually

setTimeout(function(){
    clearInterval(stopInterval);
}, 10000);

