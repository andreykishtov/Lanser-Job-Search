const home = require('./home.html');

export default function routes($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: home,
    controller: 'HomeController',
    controllerAs: 'home'
  });
}

routes.$inject = ['$stateProvider'];
