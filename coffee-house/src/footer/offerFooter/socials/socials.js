import { socialsData } from "../../../data/social-data";
import './socials.css'

export default function createSocials(parent){
    const socials = document.createElement('ul');
    socials.classList.add('socials');
    parent.append(socials);

    socialsData.forEach((soc) => {
        const social = document.createElement('li');
        social.classList.add('social');
        social.classList.add(soc.title);
        socials.append(social);

        const socialLink = document.createElement('a');
        socialLink.classList.add('social-link');
        social.append(socialLink);
        socialLink.href = soc.src;
    })

}