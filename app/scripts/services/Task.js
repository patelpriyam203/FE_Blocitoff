(function() {
  function Task($firebaseArray) {
    // var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    var checkCompleted = function(task) {
      task.completed = true;
      tasks.$save(task)
    };

    var checkIncompleted = function(task) {
      task.completed = false;
      tasks.$save(task)
    }


    Task.addTask = function(newTask) {
      tasks.$add(newTask);
    }
    Task.all = tasks;
    Task.completedTask = checkCompleted;
    Task.incompletedTask = checkIncompleted;

    return Task;
  }

  angular
    .module('Blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
