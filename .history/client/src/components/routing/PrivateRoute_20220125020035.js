import React, {useContext} from 'react';
import AuthContext from '../../context/auth/authContext';
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({ component: Component, role }) => {
   const authContext = useContext(AuthContext);
   const { isAuthenticated, loading } = authContext;
   
   if (!isAuthenticated && !loading){
      return <Navigate  to='/login'  />
   }
   
   return <Component  />
    

      // <Route {...rest} render={props => !isAuthenticated && !loading ? (
      //    <Navigate to='/login'  /> 
      // ) : ( <Component {...props} /> ) } 
      


   
}

// export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent, roles }) => {
//    const user = useSelector(selectCurrentUser)
//    const isAuthenticated = useSelector(selectIsAuthenticated)
//    const userHasRequiredRole = user && roles.includes(user.role) ? true : false
 
//    if (isAuthenticated && userHasRequiredRole) {
//      return <RouteComponent />
//    }
 
//    if (isAuthenticated && !userHasRequiredRole) {
//      return <AccessDenied />
//    }
 
//    return <Navigate to="/" />
//  }

export default PrivateRoute;
