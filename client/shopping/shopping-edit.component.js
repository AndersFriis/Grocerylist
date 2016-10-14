import template from './shopping-edit.html';

import ShoppingEditController from './shopping-edit.controller';

const shoppingEditComponent = {
    template,
    bindings: {
        save: '&',
        shopping: '<',
    },
    controller: ShoppingEditController,
    controllerAs: 'shoppingEditCtrl',
};

export default shoppingEditComponent;