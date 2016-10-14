import angular from 'angular';
import 'angular-resource';

import FlashesModule from '../flashes/flashes.module';

import shoppingPageComponent from './shopping-page.component';
import shoppingItemComponent from './shopping-item.component';
import shoppingEditComponent from './shopping-edit.component';

import shoppingAPIService from './shopping-api.service';

const ShoppingModule = angular.module('shopping', [
    'ngResource',
    FlashesModule.name,
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('shoppingAPIService', shoppingAPIService)
    .component('shoppingPage', shoppingPageComponent)
    .component('shoppingEdit', shoppingEditComponent)
    .component('shoppingItem', shoppingItemComponent);

export default ShoppingModule;