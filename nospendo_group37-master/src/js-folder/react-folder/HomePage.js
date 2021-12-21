import ShoppingSource from '../shoppingSource.js';
import React from "react";
import usePromise from './usePromise';
import HomePageView from './view-folder/HomePageView.js';
import promiseNoData from './view-folder/PromiseNoData.js';
import {articleChoise} from '../../App.js';
import useModelProp from './useModelProps.js';


const h = React.createElement;

function Shop({model}){
    const [promise, setPromise]= React.useState(null);

    React.useEffect(()=>setPromise(ShoppingSource.getCategory(0, 27108, 24, "US", "")), []);

    const [data, error]= usePromise(promise);

    const favorites = useModelProp(model, "favorites");

    const [name, setName] = React.useState("News");

    return promiseNoData(promise, data, error) || 
    h(HomePageView, { 
        data,
        category: (id, name) => {setPromise(ShoppingSource.getCategory(0, id, 24, "US", ""));
                                setName(name)},
        onSearch: text => setPromise(ShoppingSource.getCategory(0, 27108, 48, "US", text)),
        ChosenArticle: articleId => {model.setCurrentArticle(articleId);
                                    articleChoise();},
        isArticleInFav: curr => favorites.find(existing => existing.id === curr.id),
        addToFavorites: article => model.addToFavorites(article),
        name: name
    });

}

export default Shop;

