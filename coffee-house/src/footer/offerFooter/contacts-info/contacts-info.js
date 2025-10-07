
import createContactsBlock from './contacts-block/contacts-block';
import './contacts-info.css'

export default function createContactsInfo(parent){
    const contactsInfo = document.createElement('div');
    contactsInfo.classList.add('contacts-info');
    parent.append(contactsInfo);

    const contactsInfoTitle = document.createElement('h2');
  contactsInfoTitle.classList.add('heading-3');
  contactsInfoTitle.classList.add('text-light');
  contactsInfoTitle.classList.add('contacts-info-title');
 contactsInfo.append(contactsInfoTitle);
  contactsInfoTitle.textContent =
    'Contact us';

    createContactsBlock(contactsInfo)

}