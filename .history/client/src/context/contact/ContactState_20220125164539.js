import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
   GET_CONTACTS,
   CLEAR_CONTACTS,
   ADD_CONTACT,
   DELETE_CONTACT,
   CLEAR_CURRENT,
   SET_CURRENT,
   UPDATE_CONTACT,
   FILTER_CONTACTS,
   CLEAR_FILTER,
   CONTACT_ERROR
} from '../types';

const ContactState = props => {
   const initialState = {
      contacts: [ ],
      current: null,
      filtered: null,
      error: null
   };

   const [state, dispatch] = useReducer(contactReducer, initialState);

   // Get Contacts
   const getContacts = async () => {

      try{
         const res = await axios.get('api/contacts');

         dispatch({type: GET_CONTACTS, payload: res.data})

      }catch(err){
         dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
      }

   }


   //Add Contact
   const addContact = async contact => {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      }

      try{
         const res = await axios.post('api/contacts', contact, config);

         dispatch({type: ADD_CONTACT, payload: res.data})

      }catch(err){
         dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
      }

   }

   //Delete Contact
   const deleteContact = id => {
      dispatch({type: DELETE_CONTACT, payload: id})
   }

   //Set Current Contact
   const setCurrent = contact => {
      dispatch({type: SET_CURRENT, payload: contact })
   }

   //Clear Current Contact
   const clearCurrent = () => {
      dispatch({ type: CLEAR_CURRENT })
   }

   //Update Contact
   const updateContact = contact => {
      dispatch({type: UPDATE_CONTACT, payload: contact })
   }

   //Filter Contacts
   const filterContacts = text => {
      dispatch({type: FILTER_CONTACTS, payload: text })
   }

   //Clear Filter
   const clearFilter = () => {
      dispatch({type: CLEAR_FILTER })
   }

   return (
      <ContactContext.Provider
         value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            error: state.error,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
         }}>

            {props.children}

      </ContactContext.Provider>
   )

}

export default ContactState;