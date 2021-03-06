import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
   ADD_CONTACT,
   DELETE_CONTACT,
   CLEAR_CURRENT,
   SET_CURRENT,
   UPDATE_CONTACT,
   FILTER_CONTACTS,
   CLEAR_FILTER
} from '../types';

const ContactState = props => {
   const initialState = {
      contacts: [
         {
            id: 1,
            name: 'Jill Johnson',
            email: 'jill@gmail.com',
            phone: '111-111-1111',
            type: 'personal'
         },
         {
            id: 2,
            name: 'Sara Watson',
            email: 'sara@gmail.com',
            phone: '222-222-2222',
            type: 'personal'
         },
         {
            id: 3,
            name: 'Harry White',
            email: 'harry@gmail.com',
            phone: '333-333-3333',
            type: 'professional'
         }
      ],
      current: null
   };

   const [state, dispatch] = useReducer(contactReducer, initialState);

   //Add Contact
   const addContact = contact => {
      contact.id = uuidv4();
      dispatch({type: ADD_CONTACT, payload: contact})
   }

   //Delete Contact
   const deleteContact = id => {
      dispatch({type: DELETE_CONTACT, payload: id})
   }

   //Set Current Contact

   //Clear Current Contact

   //Update Contact

   //Filter Contacts

   //Clear Filter

   return (
      <ContactContext.Provider
         value={{
            contacts: state.contacts,
            addContact,
            deleteContact
         }}>

            {props.children}

      </ContactContext.Provider>
   )

}

export default ContactState;