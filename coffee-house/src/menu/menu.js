import createFooter from '../footer/footer';
import createHeader from '../header/header';
import createMain from '../main/main';
import './menu.css';

const body = document.body;
console.log(body);

const app = document.createElement('div');
app.classList.add('app');
app.id = 'app';
body.append(app);

createHeader(app, false);
createMain(app, false);
createFooter(app);
