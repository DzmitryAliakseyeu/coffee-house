import createFooter from "../footer/footer";
import createHeader from "../header/header";

  const body = document.body;
  console.log(body);

  const app = document.createElement('div');
  app.classList.add('app');
  app.id = 'app';
  body.append(app);

  createHeader(app, false);
 
  createFooter(app);