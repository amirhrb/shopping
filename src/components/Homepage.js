import React from 'react';
import { Route ,Switch  } from 'react-router-dom';

//styles
import styles from "./styles/Homepage.module.css"

//components
import Links from './Links'
import Login from './Login'
import Signup from './Signup'

const Homepage = props => {
        return (
            <div className={styles.mainpart} >
                <div className={styles.centered}>
                    <Switch>
                        <Route path="/home/login" render={(props)=><Login {...props}/> }/>
                        <Route path="/home/signup" render={(props)=><Signup {...props}/> }/>
                        <Route path="/home" component={Links}/>
                    </Switch>
                </div>
            </div>
        );
}

export default Homepage;