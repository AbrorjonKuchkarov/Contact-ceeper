import React, {useContext} from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactFilter = () => {
   const contactContext = useContext(ContactContext);
   const text = useRef('');

   const onChange = e => {
      if(text.target.value !== '') {
         contactContext.filterContacts(e.target.value);
      }else{
         contactContext.clearFilter();
      }
   }
   return (
      <form>
         <input ref={text} type='text' placeholder='Filter Contacts' onChange={onChange} />
      </form>
   )
}

export default ContactFilter;
