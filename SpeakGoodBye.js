(function (window) {
  var speakGoodbye = {};
  var greeting = "Goodbye";
  speakGoodbye.speak = function (name) {
    console.log(greeting + " " + name);
  };
  window.speakGoodbye = speakGoodbye;
})(window);
