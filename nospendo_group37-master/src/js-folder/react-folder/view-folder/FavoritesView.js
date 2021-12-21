import React from "react";   

const FavoritesView=({nav:[navCallback, navLabel], articlesFav, removeFromFav, ChosenArticle}) =>
<div className = "FavView">
    <button className="backbtn" onClick={() => navCallback()}>{navLabel}
    <i className="fa fa-home"></i> </button>

    {articlesFav.map(article => <div key={article.id}> 
    <span>
        <img className = "imgcart" src={"https://" + article.imageUrl} 
        alt="" height="150px"></img>
        </span>
    <br></br>
    <span className = "namecart" >{article.name}</span><br></br>
    <button className = "gotodet" onClick={()=> ChosenArticle(article.id)}> View </button>
    <button className = "removefav" onClick={()=> removeFromFav(article)}>Remove</button>
    </div>)}

    
</div>

export default FavoritesView;
