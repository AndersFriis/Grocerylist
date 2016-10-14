function shoppingAPIService($resource) {
    const api = {
        shopping: $resource('/api/shopping/:id/'),
    };

    return api;
}

export default shoppingAPIService;