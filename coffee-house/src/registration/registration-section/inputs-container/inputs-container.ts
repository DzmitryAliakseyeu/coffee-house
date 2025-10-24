import { addressData } from "../../../data/address-data";
import createDropdownInput from "../../../input-dropdown/input-dropdown";
import createRadioGroup from "../../../input-radio/input-radio";
import createInputBlock from "../../../input/input-block";
import './inputs-container.css'

export default function createInputsContainer(parent: HTMLElement){
    const inputsContainer = document.createElement('div');
    inputsContainer.classList.add('inputs-container');
    parent.append(inputsContainer);

    let cities= addressData.map(obj => obj.city);
    let streets: string[] = []

    

    createInputBlock(inputsContainer, 'login', 'Login', 'text', 'Placeholder')
    createInputBlock(inputsContainer, 'password', 'Password', 'password', 'Placeholder')
    createInputBlock(inputsContainer, 'confirm-password', 'Confirm Password', 'password', 'Placeholder');
    createDropdownInput(inputsContainer, 'city', 'City', 'Placeholder', cities)
    createDropdownInput(inputsContainer, 'street', 'Street', 'Placeholder', streets)
    //  createInputBlock(inputsContainer, 'city', 'City', 'text', 'Placeholder');
    //  createInputBlock(inputsContainer, 'street', 'Street', 'text', 'Placeholder');
     createInputBlock(inputsContainer, 'house-number', 'House number', 'text', 'Placeholder');

     createRadioGroup(inputsContainer, 'pay-by', 'Pay by', [{value: 'Cash', text: 'Cash'}, {value: 'Card', text: 'Card'}])
}