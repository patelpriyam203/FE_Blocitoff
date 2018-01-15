(function() {
  function Task($firebaseArray) {
    // var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    Task.all = tasks;

    Task.addTask = function(newTask) {
      tasks.$add(newTask);
    }

    return Task;
  }

  angular
    .module('Blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
