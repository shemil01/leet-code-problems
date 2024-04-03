
var createCounter = function(init) {
    var curValue=init
   function increment(){
    return ++curValue
    };
    function decrement(){
    return --curValue
    }
    function reset(){
        return (curValue = init)
    }
    return {increment,decrement,reset}
};

