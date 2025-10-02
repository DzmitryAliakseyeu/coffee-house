export default function createControls(parent) {
  const controls = document.createElement('div');
  controls.classList.add('controls');
  parent.append(controls);
}
