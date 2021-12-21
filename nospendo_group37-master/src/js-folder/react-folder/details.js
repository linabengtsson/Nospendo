import ShoppingSource from '../shoppingSource.js'
import React from 'react'
import usePromise from './usePromise.js'
import DetailsView from './view-folder/detailsView.js';
import promiseNoData from './view-folder/PromiseNoData.js';
import {backToHomepage} from '../../App.js';

const h = React.createElement;

function Details({model}){

    const [promise, setPromise]=React.useState();  

    React.useEffect(()=> 
        setPromise(model.currentArticle && ShoppingSource.getDetails(model.currentArticle)),
         [model.currentArticle]
    );

    const [data, error] = usePromise(promise);

    return promiseNoData(promise, data, error) ||
        h(DetailsView, {
            article: data,
            nav: backToHomepage,
            addToCart: article => model.addToCart(article),
            isArticleInCart: curr => model.articles.find(existing => existing.id === curr.id)
        });

}

export default Details;