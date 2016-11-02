const {ipcRenderer} = require('electron')

const Howler = require('howler');

let ocean = new Howler.Howl({

    src: ['sounds/ocean.mp3'],
    loop: true
})

let park = new Howler.Howl({

    src: ['sounds/park.mp3'],
    loop: true
})

let rain = new Howler.Howl({

    src: ['sounds/rain.ogg'],
    loop: true
})

const range1 = document.getElementById('sound1');
range1.addEventListener('input', (e) => {

    ocean.volume(e.target.value/100)
})

const range2 = document.getElementById('sound2');
range2.addEventListener('input', (e) => {

    park.volume(e.target.value/100)
})

const range3 = document.getElementById('sound3');
range3.addEventListener('input', (e) => {

    rain.volume(e.target.value/100)
})

ocean.play()
park.play()
rain.play()