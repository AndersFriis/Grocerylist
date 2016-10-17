function ShoppingPageController(shoppingAPIService, flashesService, $interval) {
    const ctrl = this;
    ctrl.editedShopping = {};

    function getShopping() {
        shoppingAPIService.shopping.get().$promise.then((data) => {
            ctrl.shopping = data.results;
        });
    }

    getShopping();
    $interval(getShopping, 5000);

    ctrl.saveShopping = function saveShopping(editedShopping) {
        shoppingAPIService.shopping.save(editedShopping).$promise.then((savedShopping) => {
            ctrl.shopping = [
                savedShopping,
                ...ctrl.shopping,
            ];
            ctrl.editedShopping = {};
            flashesService.displayMessage('Shopping List Created!', 'success');
        });
    };

    ctrl.updateShopping = function updateShopping(shoppingToUpdate) {
        shoppingAPIService.shopping.update(shoppingToUpdate).$promise.then(() => {
            flashesService.displayMessage('Shopping List Updated!', 'success');
        });
    };

    ctrl.deleteShopping = function deleteShopping(shoppingToDelete) {
        const findShopping = findIndex(item => shoppingToDelete.id === item.id);
        const index = findShopping(ctrl.shopping);

        if (index !== -1) {
            ctrl.shopping.splice(index, 1);
        }

        shoppingAPIService.shopping.delete(shoppingToDelete).$promise.then(() => {
            flashesService.displayMessage('Shopping List Deleted', 'success');
        });
    };
}

export default ShoppingPageController;