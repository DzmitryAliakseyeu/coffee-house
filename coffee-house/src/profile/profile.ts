import createFooter from '../footer/footer';
import createHeader from '../header/header';
import createMain from '../main/main';
import './profile.css';

const body = document.body;

const app = document.createElement('div');
app.classList.add('app');
app.id = 'app';
body.append(app);

createHeader(app, false);
createMain(app, false, false, false, false, false, true);
createFooter(app);

// const menuButton = document.querySelector('.button-menu') as HTMLElement;
// menuButton.setAttribute('disabled', '');
