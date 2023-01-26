var myInstance = (function () {
  var privateVar = '';
  function privateMethod() {
    //..
  }
  return {
    publicMethod1: function () { },
    publicMethod2: function () { }

  };
})();
var testing = myInstance.publicMethod1();
console.log(testing);