import heart from '../../../images/heart_img.png'
import cart from '../../../images/cart_img.png'


const MenubarView=({signOut, goToCart, goToFav, articlesInCart, articlesInFavorites})=>
   <div className="menubar">
       <button className="logout" onClick={()=> signOut()}>
         Log out
       </button>
        <div className="notification1">
        <img className="cart_img" onClick={goToCart} src={cart} height='90px' alt=""></img>
        <span className="badge">{articlesInCart}</span></div>
        
        <div className="notification2">
        <img className="heart_img" onClick={goToFav} src={heart} height='90px' alt=""></img>
        <span className="badge">{articlesInFavorites}</span></div>

   </div>


export default MenubarView;

