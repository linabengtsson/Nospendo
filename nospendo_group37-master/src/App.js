import './Css/App.css';
import './Css/Checkout.css';
import './Css/Details.css';
import './Css/Homepage.css';
import './Css/Cart.css';
import './Css/Favorites.css';
import './Css/Menubar.css';
import './Css/Login.css';
import Login from './js-folder/react-folder/login.js';
import Shop from './js-folder/react-folder/HomePage.js';
import Show from './js-folder/react-folder/show.js';
import Topbar from './js-folder/react-folder/Topbar.js';
import Menubar from './js-folder/react-folder/Menubar.js';
import Details from './js-folder/react-folder/details.js';
import Cart from './js-folder/react-folder/Cart.js';
import Favorites from './js-folder/react-folder/Favorites.js';
        
// SHOW
const backToHomepage=[() => window.location.hash="homepage", "Back to homepage"];
const articleChoise=()=> window.location.hash="details";
const goToCart=()=> window.location.hash="cart";
const goToFav=()=> window.location.hash="favorites";
const goToHomepage=()=> window.location.hash="homepage";
const goToLogin=()=> window.location.hash="login";

function defaultRoute(){
  if(! ["#login", "#homepage", "#cart", "#details", "#favorites"].find(knownRoute=> 
            knownRoute === window.location.hash))
  window.location.hash="#login";
}
defaultRoute();

window.addEventListener("hashchange", defaultRoute)


// APP
function App({model}) {
  return (
    <div className="App">
      <Topbar className="Topbar"/>
      <Show hash="#login"><Login className="login" model={model}/></Show>

    <div className="flexParent">
      <Menubar className="menubar" model={model}/>

    <div className="main"> 
        <Show hash="#homepage"><Shop className="shop" model={model}/></Show>   
        <Show hash="#details"><Details className="details" model={model}/></Show> 
        <Show hash="#cart"><Cart className="cart" model={model}/></Show>
        <Show hash="#favorites"><Favorites className="cart" model={model}/></Show>
        
      </div>
    </div>
  </div> )}

export {App, goToHomepage, goToLogin, articleChoise, backToHomepage, goToCart, goToFav};
