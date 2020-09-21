import React from 'react';
import { Route, Redirect } from "react-router-dom";


export default function ProtectedRoute({component:Component,isLoggedin,...rest}){
    return (
        <Route {...rest} render={(props)=>(
            isLoggedin?<Component {...props}/>:<Redirect to='/login' />
        )}/>
        
    )
}
