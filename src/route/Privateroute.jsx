import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpiner from '../components/LoadingSpiner';

const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <LoadingSpiner></LoadingSpiner>
    }
    if(user && user?.email){
        return children
    }
    return (
       <Navigate to="/login" state={location.pathname}/>
    );
};

export default Privateroute;