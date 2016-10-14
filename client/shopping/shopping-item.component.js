import template from './shopping-item.html';

import ShoppingItemController from './shopping-item.controller';

const shoppingItemComponent = {
    template,
    bindings: {
        shopping: '<',
        delete: '&',
    },
    controller: ShoppingItemController,
    controllerAs: 'shoppingItemCtrl',
};

export default shoppingItemComponent;