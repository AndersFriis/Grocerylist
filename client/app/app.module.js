import angular from 'angular';

import ShoppingModule from '../shopping/shopping.module';
import FlashesModule from '../flashes/flashes.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
    ShoppingModule.name,
    FlashesModule.name,
])
    .component('app', appComponent);

export default AppModule;