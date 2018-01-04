import angular from 'angular';
import uirouter from 'angular-ui-router';
// import LocalStorageModule from 'angular-local-storage';

import routing from './index.config';
import './stylesheets/bulma.css';
import './stylesheets/style.css';

import home from './components/feature/Home';

angular.module('lanser', [uirouter, home]).config(routing);

// angular
//   .module('lanser', [uirouter, LocalStorageModule])
//   .config(routing)
//   .run([
//     '$state',
//     function ($state) {
//       $state.go('home');
//     }
//   ])
//   .constant('API', {
//     // URL: 'http://ec2-18-221-91-138.us-east-2.compute.amazonaws.com:7575/api'
//     URL: 'http://localhost:7575/api'
//   });

// $stateProvider => {
//   const home = {
//     name: 'home',
//     url: '/',
//     template: '<home></home>'
//   };

//   const login = {
//     name: 'login',
//     url: '/login',
//     template: '<login></login>'
//   };

//   const profile = {
//     name: 'profile',
//     url: '/profile',
//     template: '<profile></profile>'
//   };

//   const register = {
//     name: 'register',
//     url: '/register',
//     template: '<register></register>'
//   };

//   $stateProvider.state(home);
//   $stateProvider.state(login);
//   $stateProvider.state(register);
//   $stateProvider.state(profile);
// }
