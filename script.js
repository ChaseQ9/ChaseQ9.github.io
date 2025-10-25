let i = 0;

window.onload = () => {
    var image = document.getElementById("pfp");
    let images = ["Assets/ice_castles.jpg", "Assets/factorio.png"];

    image_swap = () => {
        image.style.transform = 'rotateY(90deg)';
        setTimeout(() => {
            i = (i + 1) % images.length;
            image.src = images[i];
            image.style.transform = 'rotateY(0deg)'; 
        }, 300);
    }
    setInterval(image_swap, 5000);
}
