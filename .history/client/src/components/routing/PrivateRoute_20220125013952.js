import React, {useContext} from 'react';
import AuthContext from '../../context/auth/authContext';
import {Route, Navigate} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
   const authContext = useContext(AuthContext);
   const { isAuthenticated, loading } = authContext;
   return (
      <Route  path={...rest}  element={ !isAuthenticated && !loading ? <Navigate replace to='/login'  />  : ( <Component {...props}  /> )   }

      // <Route {...rest} render={props => !isAuthenticated && !loading ? (
      //    <Navigate to='/login'  /> 
      // ) : ( <Component {...props} /> ) } 
      />


   )
}

export default PrivateRoute;
