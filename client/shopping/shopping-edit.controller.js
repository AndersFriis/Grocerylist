import { merge } from 'ramda';

function ShoppingEditController() {
    const ctrl = this;
    ctrl.editedShopping = {};

    ctrl.$onChanges = function $onChanges() {
        ctrl.editedShopping = merge({}, ctrl.shopping);
    };

    ctrl.saveShopping = function saveShopping() {
        ctrl.save({ editedShopping: ctrl.editedShopping });
    };
}

export default ShoppingEditController;