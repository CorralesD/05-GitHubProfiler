(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http'];

    /* @ngInject */
    function HomeController($http) {
        var vm = this;
        vm.callGithubApi = callGithubApi;

        ////////////////

        function callGithubApi() {
            $http
                .get('https://api.github.com/users/' + vm.username)
                .then(function(response) {
                    vm.data = response.data;
                    if (vm.data.company == null) {
                        vm.colorHireable = 'text-success';
                    } else {
                        vm.colorHireable = 'text-danger';
                    }
                })
                .catch(function(error) {
                    alert('An error occured downloading from GitHub');
                });
            document.getElementById('hide').style.visibility = 'visible';
        }
    }
})();
