function playSound(idElementAudio) {
    const element = document.querySelector(idElementAudio);

    if (element != null && element.localName === 'audio') {
        element.play();
    } else {
        console.log('Could not find the element or invalid selector');
    }
}

const keyList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;   // Using a tamplate string

    key.onclick = function () {
        playSound(idAudio);
    }

    key.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.remove('ativa');
        }
    }
}