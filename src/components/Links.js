import React from 'react';
import { Link } from 'react-router-dom';

//styles
import style from './styles/Links.module.css'


const Links = () => {
    return (
        <div className={style.div}>
            <Link className={style.signup} to="/home/signup">Sign Up</Link>

            <Link className={style.login} to="/home/login">Login</Link>
        </div>
    );
};

export default Links;