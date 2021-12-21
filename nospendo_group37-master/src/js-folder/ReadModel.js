import ShoppingModel from  './ShoppingModel.js';

function readModel(){
    let modelString= localStorage.getItem("shoppingModel");
    let modelObject= JSON.parse(modelString);
    let model;
    if (!modelString){
        modelObject = {};
        model = new ShoppingModel();
    }
    else{
        model = new ShoppingModel(modelObject.articles, modelObject.favorites, modelObject.currentArticle);
    }
  
    model.addObserver(function(){
  
    localStorage.setItem("shoppingModel", 
        JSON.stringify({articles: model.articles,
        favorites: model.favorites,
        currentArticle: model.currentArticle}))
    });
    return model;
}
export default readModel;
