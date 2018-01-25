(function() {
  function HomeCtrl(Task, $scope) {
    this.tasks = Task.all;

    this.addTask = function(taskTitle, taskDescription) {
      if (taskTitle) {
        var newTask = {
          title: taskTitle,
          description: taskDescription,
          createdAt: moment().dayOfYear(),
          completed: false
        };
        Task.addTask(newTask);
      }
    }

    this.checkHide = function(task) {
      if ((task.createdAt < (moment().dayOfYear() - 7)) || task.completed == true) {
          return true;
      }
    };
  }

  angular
    .module('Blocitoff')
    .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
