import angular from 'angular';
import angularUi from 'angular-ui-router';
import LocalStorageModule from 'angular-local-storage';

import constants from './config/app.constants';

import appConfig from './config/app.config';
import appRun from './config/app.run';

import layout from './layout';
// import './components';
// import './home';
// import './profile';
// import './article';
// import './services';
// import './auth';
// import './settings';
// import './editor';

// Create and bootstrap application

const requires = [
  angularUi,
  LocalStorageModule,
  layout
  // 'app.components',
  // 'app.home',
  // 'app.profile',
  // 'app.article',
  // 'app.services',
  // 'app.auth',
  // 'app.settings',
  // 'app.editor'
];

// Mount on window for testing
window.app = angular.module(constants.appName, requires);

angular.module(constants.appName).constant('AppConstants', constants);

angular.module(constants.appName).config(appConfig);

angular.module(constants.appName).run(appRun);

angular.bootstrap(document, [constants.appName], {
  strictDi: true
});
