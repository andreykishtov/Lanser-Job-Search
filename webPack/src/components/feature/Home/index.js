import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controler';

export default angular
  .module('lanser.home', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController).name;
