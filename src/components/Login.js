import React ,{ useEffect , useState } from 'react';
import { Link } from 'react-router-dom';

import { validate } from '../helper/functions';

//styles
import styles from './styles/Signup.module.css'

const Login = () => {
    //woeuefhcow
    const [data,setData] = useState({
        email:'',
        password:'',
    })
    const [error,setError] = useState({})
    const [active,setActive] = useState({})

    useEffect(()=>{
        setError(validate(data))
    },[data,active,error])

    const Focused=(e)=>{
        setActive({...active,[e.target.name]:true})
    }

    const Handler=(e)=>{
        setData({
          ...data,[e.target.name]:e.target.checked,
        })
    }
    const Login=(e)=>{
        e.preventDefault()
        setActive({...active,email:true,password:true,})
    }
    return (
        <div  className={styles.cont}>
            <form className={styles.form} onSubmit={Login}>
              <h1>Login</h1>
              <br />
              <label>Email</label>
              <input type="text" name='email' value={data.email} onChange={Handler} onBlur={Focused}/>
              {error.email && active.email && <span>{error.email}</span>}
              <br />
              <label>Password</label>
              <input type="password" name='password' value={data.password} onChange={Handler} onBlur={Focused}/>
              {error.password && active.password && <span>{error.password}</span>}
              <br />
              <br />
              <button>Login</button>
              <Link to="/home/signup">Sign Up</Link>
            </form>
        </div>
    );
};

export default Login;