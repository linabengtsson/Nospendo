import MenubarView from './view-folder/MenubarView.js';
import firebasehelper from '../FirebaseHelper.js'
import React from "react";
import {goToCart} from '../../App.js';
import {goToFav} from '../../App.js';
import useModelProp from './useModelProps.js';

const h = React.createElement;

function Menubar({model}) {

    const counts = model.countArticles();
    
    useModelProp(model, "articles");

    const favorites = useModelProp(model, "favorites");

    const [, setMenu] = React.useState("");

    React.useEffect(()=> 
    window.addEventListener("hashchange", 
               ()=> setMenu(window.location.hash)), []);

    if(window.location.hash !== "#login"){
        return h(MenubarView, { 
            signOut: () => {firebasehelper.signOut();
                            model.removeAllFavorites();},
            goToCart: goToCart,
            goToFav: goToFav,
            articlesInCart: model.articlesInCart(counts),
            articlesInFavorites: favorites.length          
        })}
    else{
        return <></>
    };
}

export default Menubar;