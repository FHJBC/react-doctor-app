import React from 'react';
import './SignUp.css';


const SignUp = () => {
  return (
    <div className="container">
        <div className="wrapper">
            <form>
                <h2>Inscription</h2>
                <input type="text" name="username" placeholder="Nom d'utilisateur" className="box" />
                <input type="email" name="email" placeholder="E-mail" className="box" />
                <input type="password" name="password" placeholder="Mot de passe" className="box" />
                <input type="button" value="S'inscrire" className="btn" />
                <div className="line"></div>
            </form>
        </div>
    </div>  
    );
};

export default SignUp;
