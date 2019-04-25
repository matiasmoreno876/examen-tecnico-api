'use strict'

module.exports = {
    from
};

var itemList = {
    author: {
        name: 'Matias',
        lastname: 'Moreno'
    },
    categories: [],
    items: []
};

function from(data) {
    if (data.results) {
        itemList.categories = loadCategories(data);
        itemList.items = loadItems(data);
    }
    return itemList;
}

function loadCategories(data) {
    let categories = [];
    if (data.filters[0] && data.filters[0].values[0]) {
        categories = data.filters[0].values[0].path_from_root.map((c) => {
            return c.name
        });
    }
    return categories;
}

function loadItems(data) {
    let items = data.results.slice(0, 4);
    items = items.map((item) => {
        let amount = Math.floor(item.price);
        let decimals = (item.price % 1).toFixed(2).substring(2);

        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: amount,
                decimals: decimals
            },
            picture: item.thumbnail,
            condition: item.condition == 'new' ? 'Nuevo' : 'Usado',
            free_shipping: item.shipping.free_shipping,
            city_name: item.address.city_name
        }
    });

    return items;
}
