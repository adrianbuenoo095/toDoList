var printer = (function () {
    var printerInstance;

    function create() {
        function print() {

        }

        function turnOn() {
        
        }
        return {
            //public + private states and behaviors
            print: print,
            turnOn: turnOn
        };

    }

    return {
        getInstance: function () {
            if (!printerInstance) {
                printerInstance = create();
            }
            return printerInstance
        }
    };

    function Singleton() {
        if (!printerIntancance) {
            printerIntancance = intialize();
        }
    };

})(); //invocked 

var officePriner = printer.getInstance();
console.log(officePriner);