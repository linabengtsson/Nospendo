import CartView from './view-folder/CartView.js';
import React from "react";
import {backToHomepage} from '../../App.js';
import useModelProp from './useModelProps.js';

const h = React.createElement;

function Cart({model}) {
        
    const counts = model.countArticles();

    useModelProp(model, "articles");
    
    const cart = model.getCart();
        
    return h(CartView, {
        nav: backToHomepage,
        articles: cart,
        removeFromCart: curr => model.removeFromCart(curr),
        addToCart: curr => model.addToCart(curr),
        counts: counts,
        removeOneItem: article => {model.removeOneItem(article)},
        remove: () => {model.removeAll()}});
}
export default Cart;