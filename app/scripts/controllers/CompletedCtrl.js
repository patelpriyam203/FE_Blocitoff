(function() {
  function CompletedCtrl(Task) {
    this.tasks = Task.all;

    this.showTasks = function(task) {
     return task.created > (moment().dayOfYear() - 7) && task.completed == false
    };

  }

  angular
    .module('Blocitoff')
    .controller('CompletedCtrl', ['Task', CompletedCtrl]);
})();
