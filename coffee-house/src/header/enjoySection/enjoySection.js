import './enjoySection.css'

export default function createEnjoySection(parent){
    const containerSection = document.createElement('section');
    containerSection.classList.add('container-section');
    parent.append(containerSection);

    const video = document.createElement('video');
    video.classList.add('video');
    containerSection.append(video);
    video.src = '../../public/video/coffee-house-video.mp4'
    video.autoplay = true;
    video.muted = true;
    video.loop = true;

}