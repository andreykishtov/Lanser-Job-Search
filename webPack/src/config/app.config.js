import constants from './app.constants';

function AppConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider.state(constants.appName, {
    abstract: true,
    templateUrl: 'layout/app-view.html'
  });

  $urlRouterProvider.otherwise('/');
}

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default AppConfig;
