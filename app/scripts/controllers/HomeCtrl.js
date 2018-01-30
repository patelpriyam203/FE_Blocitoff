(function() {
  function HomeCtrl(Task, $scope) {
    this.tasks = Task.all;

    this.addTask = function(title, description) {
      if (title) {
        var newTask = {
          title: title,
          description: description,
          createdAt: moment().dayOfYear(),
          completed: false
        };
        Task.addTask(newTask);
      }
    }

    this.checkHidden = function(task) {
      if ((task.createdAt < (moment().dayOfYear() - 7)) || task.completed == true) {
          return true;
      }
    };
  }

  angular
    .module('Blocitoff')
    .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
