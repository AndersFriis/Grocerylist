import { merge } from 'ramda';

function ShoppingItemController() {
    const ctrl = this;
    ctrl.showControls = false;
    ctrl.editMode = false;
    ctrl.shoppingToEdit = {};

    ctrl.setShowControls = function setShowControls(showControls) {
        ctrl.showControls = showControls;
    };

    ctrl.setEditMode = function setEditMode(editMode) {
        ctrl.editMode = editMode;

        // merge probably not necessary
        ctrl.shoppingToEdit = merge({}, ctrl.shopping);
    };

    ctrl.editShopping = function editShopping(shoppingToEdit) {
        ctrl.update({ shoppingToUpdate: shoppingToEdit });
        ctrl.shopping = shoppingToEdit;
        ctrl.editMode = false;
    };

    ctrl.deleteShopping = function deleteShopping() {
        ctrl.delete({ shoppingToDelete: ctrl.shopping });
    };
}



export default ShoppingItemController;