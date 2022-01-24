import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {
   SET_ALERT, REMOVE_ALERT
} from '../types';

const AlertState = props => {
   const initialState = [];

   const [state, dispatch] = useReducer(alertReducer, initialState);

//Set Alert
const setAlert = (msg, type) => {
   const id = uuidv4();
   dispatch({
      type: SET_ALERT,
      payload: {msg, type, id}
   })
   setTimeout(() => dispatch ({type: REMOVE_ALERT, payload: id } ), 5000)
}


  
   return (
      <AuthContext.Provider
         value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            loading: state.loading
         }}>

            {props.children}

      </AuthContext.Provider>
   )

}

export default AuthState;