function likePet(button) {
    let currentLikes = parseInt(button.innerText.split(' ')[0]);
    button.innerText = (currentLikes + 1) + " me gusta";
}
