import constants from './app.constants';

function AppConfig($locationProvider, $stateProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider.state(`${constants.appName}`, {
    url: '/',
    templateUrl: 'index.html',
    title: 'home'
  });

  $urlRouterProvider.otherwise('/');
}

AppConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default AppConfig;
