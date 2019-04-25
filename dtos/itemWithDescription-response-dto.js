'use strict'

module.exports = {
    from
};

var itemWithDescription = {
    author: {
        name: 'Matias',
        lastname: 'Moreno'
    },
    item: {}
};

function from(item, description) {
    itemWithDescription.item = loadItem(item);
    itemWithDescription.item.description = description.plain_text;

    return itemWithDescription;
}

function loadItem(item) {

    let amount = Math.floor(item.price);
    let decimals = +(item.price % 1).toFixed(2).substring(2);

    let itemDto = {
        id: item.id,
        title: item.title,
        price: {
            currency: 'ARS',
            amount: amount,
            decimals: decimals
        },
        picture: item.thumbnail,
        condition: item.condition == 'new' ? 'Nuevo' : 'Usado',
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: ''
    };
    return itemDto;
}
