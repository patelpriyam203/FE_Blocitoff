(function() {
  function HomeCtrl(Task, $scope) {
    this.tasks = Task.all;

    this.addTask = function(taskTitle, taskDescription) {
      if (taskTitle) {
        var newTask = {
          title: taskTitle,
          description: taskDescription,
          createdAt: Date.now(),
          completed: false
        };
        Task.addTask(newTask);
      }
    }
  }

  angular
    .module('Blocitoff')
    .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
