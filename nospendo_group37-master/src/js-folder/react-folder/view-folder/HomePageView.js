import React from "react";

const HomePageView = ({data, category, onSearch, ChosenArticle,
                        isArticleInFav, addToFavorites, name}) =>{
                            
    const category_list1 =  [{category:"News", categoryids: 27108},
                            {category:"Coats and jackets", categoryids:2641},
                            {category:"Hoodies", categoryids: 11321},
                            {category:"Jeans", categoryids: 3630},
                            {category:"Swimwear", categoryids: 2238},
                            {category:"Underwear", categoryids: 6046}];

    const category_list2 =  [{category:"Accesories", categoryids: 4174},
                            {category:"Shorts and skirts", categoryids: 9263},
                            {category:"Pants and chinos", categoryids: 2640},
                            {category:"Tops", categoryids: 4169},
                            {category:"Shoes", categoryids: 4172}];
    
    
    const [text, setText]= React.useState("");
                      
    return <div>
        <input className = "searchBox" type ="text" placeholder="Search..." 
        onChange={event => setText(event.target.value)}></input>
        <button className = "searchbtn" type="submit" 
            onClick={()=> onSearch(text)}>Search!
        </button>
        <br></br>
        {category_list1.map(c => 
            <button key={c.category} className = "catbtn" 
                onClick={()=> {category(c.categoryids, c.category)}}>{c.category}
            </button>)}
        <br></br>
        {category_list2.map(c =>
            <button key={c.category} className = "catbtn2" 
                    onClick={()=> {category(c.categoryids, c.category)}}>{c.category}
            </button>)}
        <br></br>
        <p className="titlesid">{name}</p>
            
        {data.products.map(article => 
        <span key={article.id} className="searchResults">
            <span className="pic">
                <img src={"https://" + article.imageUrl} 
            onClick={()=> ChosenArticle(article.id)} alt="" width="250px"></img>
            </span>
            <button className="btnfav" onClick={() => addToFavorites(article)} 
            disabled={isArticleInFav(article)}>
                <i className="fas fa-heart"></i>
            </button>
            <p className="text">{article.name}
            <br></br>
            <span className="text2">Price: {article.price.current.value
            +" "+ article.price.currency}</span>
            </p>
        </span>)}
    </div>}

export default HomePageView;
