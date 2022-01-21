import React, {Fragment, useContext} from 'react';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
   const contactContext = useContext(ContactContext);

   if(contacts.length === 0 ){
      return <h4>Please add a contact</h4>
   }

   const {contacts, filtered} = contactContext;
   return (
      <Fragment>
         {contacts.map(contact => <ContactItem key={contact.id} contact = {contact} /> )}
      </Fragment>
   )
}

export default Contacts;
