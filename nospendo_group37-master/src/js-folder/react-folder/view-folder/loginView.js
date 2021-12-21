import nospendo from '../../../images/nospendo_img_1.png';

const LoginView=({signIn, signUp, setEmail, setPass})=>
<div className="container">
    <p className="text_login_1">Welcome to
    <br></br>
    <img border="0" alt="" src={nospendo} width="137" height="27"/></p>
    <p className="text_login_2">Log in or sign up to<br></br>calm your shopping desire</p>
    <br></br>
    <div className = "email">
        <i className="far fa-envelope"></i></div>
    <input onChange={event=> setEmail(event.target.value)} className="form1" 
        type="email" placeholder="Enter Email..."/>
        <br></br>
    <div className = "password"><i className="fas fa-key"></i></div>
        <input  className="form2" onChange={event=> setPass(event.target.value)}  
            type="password" placeholder="Enter Password..."/>
        <br></br>
        <button onClick={()=> signIn()} className="btnlogin">
            Log in
        </button>
        <br></br>
        <button onClick={()=> signUp()} className="btnsignup" >
            Sign up
        </button>
    </div>;

export default LoginView;
