import angular from 'angular';
import uirouter from 'angular-ui-router';

import './home.css';

import routing from './home.routes';
import HomeController from './home.controler';
import randomNames from '../../../services/randomNames.service';
import greeting from '../../../directives/greeting.directive';

export default angular
  .module('lanser.home', [uirouter, randomNames, greeting])
  .config(routing)
  .controller('HomeController', HomeController).name;
