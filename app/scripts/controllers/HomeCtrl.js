(function() {
  function HomeCtrl(Task, $scope) {
    this.tasks = Task.all;
    this.taskStatus = function(task) {
      Task.completedTask(task);
    }

    this.checkHidden = function(task) {
      return task.createdAt < (moment().dayOfYear() - 7) || task.completed == true
    };

    // this.showTasks = function(task) {
    //   return task.createdAt > (moment().dayOfYear() - 7) && task.completed == false
    // };

    this.addTask = function(description, priority) {
      if (description) {
        var newTask = {
          description: description,
          priority: priority,
          createdAt: moment().dayOfYear(),
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
