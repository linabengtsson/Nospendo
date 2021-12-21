import firebasehelper from './FirebaseHelper.js'

class ShoppingModel{
    constructor(articles=[], favorites=[], currentArticle=null){
        this.subscribers = [() => firebasehelper.writeToCart(this.articles)];
        this.articles = articles;
        this.favorites = favorites;
        this.currentArticle = currentArticle;
    }

   addObserver(callback){
        this.subscribers = this.subscribers.concat(callback);  
    }

   notifyObservers(){
        this.subscribers.forEach(callback=> callback());
    }

    removeObserver(obs){
        this.subscribers= this.subscribers.filter(o=> o !== obs); 
    }
  
    addToCart(article){
        this.articles = [article, ...this.articles];
        this.notifyObservers();
    }

    addAllArticlesToCart(articles){
        if (!articles){
            const all_articles = [...this.articles];
            all_articles.length = 0;
            this.articles = all_articles;
        } 
        else{
            this.articles = articles;
        }
        this.notifyObservers();
    }

    addToFavorites(article){
        if (this.favorites.find(element => element.id === article.id))
            throw Error("Already in favorites");
        else {
        this.favorites = [article, ...this.favorites];
        this.notifyObservers();}
    }

    getCart(){
        const result={};
        this.articles.forEach(i=>{
            if(!result[i.id])
             result[i.id]={...i};
            })
        return Object.values(result);
     }

    countArticles(){
        var arr = [...this.articles];
        var counts = {};

        for (var i = 0; i < arr.length; i++) {
        var num = arr[i].id;
        counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        return counts;
    }

    articlesInCart(counts){
        const values = Object.values(counts);
        const number = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return number;
    }

    removeOneItem(article){
        const index = this.articles.findIndex(a => a.id === article.id);
        const new_article = [...this.articles];
        new_article.splice(index,1);
        this.articles = new_article;
        this.notifyObservers();
    }

    removeAll(){
        const all_articles = [...this.articles];
        all_articles.length = 0;
        this.articles = all_articles;
        this.notifyObservers();
    }

    removeAllFavorites(){
        const favorites = [...this.favorites];
        favorites.length = 0;
        this.favorites = favorites;
        this.notifyObservers();
    }

    removeFromCart(article){
        this.articles = this.articles.filter(element => element.id !== article.id);
        this.notifyObservers();
    }

    removeFromFavorites(article){
        this.favorites = this.favorites.filter(element => element.id !== article.id);
        this.notifyObservers();
    }

    setCurrentArticle(id){
        this.currentArticle = id
        this.notifyObservers();
    }

}

export default ShoppingModel;
