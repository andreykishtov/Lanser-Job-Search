import angular from 'angular';
import constants from '../config/app.constants';
import AppHeader from './header.component';
import AppFooter from './footer.component';

const layoutModule = angular.module(`${constants.appName}.layout`, []);

layoutModule.component('appHeader', AppHeader);
layoutModule.component('appFooter', AppFooter);

export default layoutModule.name;
