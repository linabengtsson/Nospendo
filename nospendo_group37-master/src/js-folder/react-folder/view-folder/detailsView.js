const DetailsView=({article, nav:[navCallback, label], addToCart})=>
<div className="info">
    <button className="backbtn" onClick={() => navCallback()}> {label} 
    <i className="fa fa-home"></i></button>
    
    <img src={"https://" + article.media.images[0].url} className="pic1" alt=""/>
    <img src={"https://" + article.media.images[1].url} className="pic2" alt=""/>
    
    <div className="name">{article.name}</div>
    <div className = "pricedet" >Price: {article.price.current.value} {article.price.currency}</div>
    <button className="cartbtn" onClick={() => addToCart(article)}> 
        Add to <i className="fas fa-cart-plus"></i>
    </button>
    <span className="ruta">
    <div className = "abouttit">About this product:</div>
    <div className ="about" dangerouslySetInnerHTML={{__html: article.info.aboutMe}}/></span>
    
    <br></br>

</div>

export default DetailsView;