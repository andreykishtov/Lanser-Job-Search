import angular from 'angular';
import uirouter from 'angular-ui-router';

import './home.css';

import routing from './home.routes';
import HomeController from './home.controler';
import randomNames from '../../../services/randomNames.service';

console.log(randomNames);

export default angular
  .module('lanser.home', [uirouter, randomNames])
  .config(routing)
  .controller('HomeController', HomeController).name;
