const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
];

const renderGoodsItem = (title = 'good', price = 0) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));  // массив (через запятую)
    // console.log(goodsList);
    document .querySelector( '.goods-list' ).innerHTML = goodsList.join('');    // строка
    // console.log(goodsList.join(''));

    // document.querySelector('.goods-list').innerHTML =
    //     list.map(item => renderGoodsItem(item.title, item.price)).join('');  // как вариант сократить
};

renderGoodsList(goods);
