function shoppingAPIService($resource) {
    const api = {
        shopping: $resource('/api/shoppinglist/:id/',
            // maps a .id on our object to the url above
            { id: '@id' },
            {
                update: {
                    method: 'PUT', 
                },
            }),
    };

    return api;
}

export default shoppingAPIService;