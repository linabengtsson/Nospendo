import FavoritesView from './view-folder/FavoritesView.js';
import React from "react";
import {backToHomepage} from '../../App.js';
import useModelProp from './useModelProps.js';
import {articleChoise} from '../../App.js';


const h = React.createElement;

function Favorites({model}) {

    const fav = useModelProp(model, "favorites");

 
    return h(FavoritesView, {
         nav: backToHomepage,
         articlesFav: fav,
         removeFromFav: article => model.removeFromFavorites(article),
         ChosenArticle: articleId => {model.setCurrentArticle(articleId);
                        articleChoise();
        }})
    };

export default Favorites; 