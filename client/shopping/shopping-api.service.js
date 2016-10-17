function shoppingAPIService($resource) {
    const api = {
        shopping: $resource('/api/shoppinglist/:id/'),
    };

    return api;
}

export default shoppingAPIService;