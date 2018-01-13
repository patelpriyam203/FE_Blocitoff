(function() {
  function HomeCtrl(Task) {
    this.tasks = Task.all;
  }

  angular
    .module('Blocitoff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
