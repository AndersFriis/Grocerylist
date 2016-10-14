function ShoppingPageController(shoppingAPIService, flashesService, $interval) {
    const ctrl = this;
    ctrl.editedShopping = {};

    function getShopping() {
        shoppingAPIService.shopping.get().$promise.then((data) => {
            ctrl.shopping = data.results;
        });
    }

    

export default ShoppingPageController;