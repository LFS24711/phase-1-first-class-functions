function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    return function f(){
    }
}

function returnsAnAnonymousFunction() {
   return itsAFunction => console.log(`it's a function`)
}