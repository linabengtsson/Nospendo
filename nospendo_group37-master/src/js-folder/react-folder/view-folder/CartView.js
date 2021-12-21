import React from "react";
import Popup from 'reactjs-popup';
import panda from '../../../images/panda.png';   
import brost from '../../../images/brost.png'; 
import djur from '../../../images/djur.png';
import friends from '../../../images/friend.png';
import reddabarnen from '../../../images/reddabarnen.png';
import nospendo from '../../../images/nospendo_img_1.png';

const CartView=({nav:[navCallback, label], articles,  
                removeFromCart, counts, addToCart, removeOneItem, remove}) =>
  <div className="cartPage">
    <button className="backbtn" onClick={() => navCallback()}> {label}
      <i className="fa fa-home"></i>
    </button>{articles.map(article => 
      <div key={article.id}> 
        <span>
          <img className = "imgcart" src={"https://" + article.media.images[0].url} alt="" height="150px"/>
        </span>
    <br></br>
      <button className = "remove" onClick={()=> removeFromCart(article)}>x</button>
      <span className = "namecart" >{article.name}</span>
    <br></br>
      <span className = "pricecart">Price: {article.price.current.value+" "+ article.price.currency}</span>
    <br></br>
      <button className = "button1" onClick={()=> removeOneItem(article)} disabled={counts[article.id]<=1}>-</button>
      <span className = "number"> {counts[article.id]} </span>
      <button className = "button2" onClick={()=> addToCart(article)}>+</button>
      <span> Total price: {article.price.current.value * counts[article.id] +" "+ article.price.currency}</span>
    <br></br>
    </div>)}
    <h3 className = "totprice">Total Price: {articles.map(article => article.price.current.value * counts[article.id]).reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2)} USD</h3>

    
    <Popup trigger={<button className = "buy_button"> CHECKOUT </button>} position="center"
            modal>      
    {close => (
      <div className="modal">
        <button className="close" onClick={()=> {close();
                                                remove();}}>
          &times;
        </button>
        <div className="header"><i className="fas fa-hand-holding-heart"></i>
        {'  '} Thank you for choosing <i className="fas fa-hand-holding-heart"></i><br></br><img className="nospendo_img" border="0" alt="" src={nospendo} width="205" height="40"/> {'  '} 
         </div>
        <div className="content">
          {' '}
          Since this was only a shopping simulation,<br></br>you have now saved <h3 className = "totprice2"> {articles.map(
            article => article.price.current.value * counts[article.id]).reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2)}
            USD</h3>
            <div className ="textcheck">
          Instead of spending money on products you probably don't even need,
          you now have the opportunity to spend them on something more valuable.</div>
          Here are a few examples: <br></br>
          
          <a href="https://www.wwf.se/stod/swishgava/" target ="_blank">
          <img className= "organ" border="0" alt="panda" src={panda} width="100" height="100"/>
          </a>
          <a href="https://brostcancerforbundet.se/stod-oss/" target ="_blank">
          <img className= "organ" border="0" alt="brost" src={brost} width="100" height="100"/>
          </a>
          <a href="https://friends.se/stod-oss/" target ="_blank">
          <img className= "organ" border="0" alt="friends" src={friends} width="100" height="100"/>
          </a>
          <a href="https://www.djurensratt.se/engagera-dig/stod-oss" target ="_blank">
          <img className= "organ" border="0" alt="djur" src={djur} width="100" height="100"/>
          </a>
          <a href="https://www.raddabarnen.se/" target ="_blank">
          <img className= "organ" border="0" alt="reddabarnen" src={reddabarnen} width="100" height="100"/>
          </a>
          
        </div>
      </div>
    )}
    </Popup>
  
</div>

export default CartView;
