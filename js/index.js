const buttons = document.querySelector('#buttons');

const playAudio = ref => {
    const audio = new Audio(`audio/${ref}.mp3`);
    audio.play();
}

buttons.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') playAudio(e.target.className);
})

window.addEventListener('keydown', e => Array.from(buttons.children).forEach(button => e.key == button.textContent ? playAudio(button.className) : ''))
