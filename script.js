var character = document.getElementById('character')
var block = document.getElementById('block');

function jump() {
    if (character.classList != 'animate') {
        character.classList.add("animate");
    }
    setTimeout(() => {
        character.classList.remove('animate')
    }, 900);
}

var checkDead = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 530) {
        block.style.animation = 'none';
        block.style.display = 'none';
        character.style.display = 'none';
        alert('Game Over!!! You Lose....');
    }
}, 10);