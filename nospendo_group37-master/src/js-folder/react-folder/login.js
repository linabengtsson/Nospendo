import LoginView from './view-folder/loginView.js';
import firebasehelper from '../FirebaseHelper.js';
import React from "react";

const h = React.createElement;

function Login({model}){

    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");

    return h(LoginView, {
        signIn: () => firebasehelper.signIn(email, pass, (data)=> model.addAllArticlesToCart(data)
                                            ),
        signUp: () => firebasehelper.signUp(email, pass, (data)=> model.addAllArticlesToCart(data)),
        setEmail,
        setPass    
    });
}

export default Login;