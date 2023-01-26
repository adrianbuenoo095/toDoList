var myInstance = (function () {
  var privateVar = '';
  function privateMethod() {
    privateVar = "testing"
    console.log(privateVar)
  }
  return {
    publicMethod1: function () { 
      console.log('Hello World')
    },
    publicMethod2: function () { }

  };
})();
var testing = privateMethod();
console.log(testing);