
const options = ['a','s','d','f','g','h','j']

document.addEventListener('keydown', (e) => {
    let key = e.key.toLowerCase()
    let elemento = document.getElementById(key)
    if(options.includes(key))
        agregarEfectoDeAudio(new Audio(`./sonidos/${key}.mp3`), elemento)

})

const agregarEfectoDeAudio = (audio, elemento) => {
    audio.play();
    elemento.classList.add('box-playing')
    setTimeout(() => elemento.classList.remove('box-playing'),200)
}