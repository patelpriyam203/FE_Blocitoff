(function() {
  function CompletedCtrl(Task) {
    this.tasks = Task.all;

    this.taskStatus = function(task) {
      Task.incompletedTask(task)
    };

    this.showTasks = function(task) {
      return task.createdAt > (moment().dayOfYear() - 7) && task.completed == false
    };

    // this.checkHidden = function(task) {
    //   return task.createdAt < (moment().dayOfYear() - 7) || task.completed == true
    // };

  }

  angular
    .module('Blocitoff')
    .controller('CompletedCtrl', ['Task', CompletedCtrl]);
})();
