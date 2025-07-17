import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user}=useContext(AuthContext)
    if(user !== null){
        return children
    }
    return (
       <Navigate to="/login" state={location.pathname}/>
    );
};

export default Privateroute;