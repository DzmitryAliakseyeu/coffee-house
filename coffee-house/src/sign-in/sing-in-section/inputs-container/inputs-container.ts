import validateLogin from "../../../actions/validation/validateLogin";
import createInputBlock from "../../../input/input-block";
import './inputs-container.css'

export default function createInputsContainer(parent: HTMLElement){
    const inputsContainer = document.createElement('div');
    inputsContainer.classList.add('inputs-container');
    parent.append(inputsContainer);

    createInputBlock(inputsContainer, 'login', 'Login', 'text', 'Placeholder')
    createInputBlock(inputsContainer, 'password', 'Password', 'text', 'Placeholder')
}