import React, {Fragment, useContext} from 'react';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
   const contactContext = useContext(ContactContext);

   const {contacts} = contactContext;
   return (
      <Fragment>
         {contacts.map(contact => <h3> <ContactItem /> </h3> )}
      </Fragment>
   )
}

export default Contacts;
