// Global variables and controllers
let i = 0;
let text_counter = 0;
let load_file = async (filePath) => {
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error('HTTP error');
    }
    const textData = await response.text();
    return textData;
}

// Function used to update the header banner as well as the associated description text
let update_header_text = () => {
    let headers = ["whoami", "ls projects", "echo \"Hello World\"!"];
    let descriptions = [];
    let headerText = document.getElementById("intro-header");         
    let descriptionText = document.getElementById("intro-descriptions");
    // Adjust the opacity for the transition between headers & descriptions
    headerText.style.opacity = 0;
    descriptionText.style.opacity = 0;
    setTimeout(() => {
        headerText.textContent = "> " + headers[text_counter++] ;
        headerText.style.opacity = 1;
        load_file("descriptions.txt").then(text => {
            descriptionText.textContent = text;
        });
        descriptionText.style.opacity = 1;
    }, 500);


    if (text_counter >= headers.length) {
        text_counter = 0;
    }

}

// Function used to update the profile picture
let image_swap = () => {
    let image = document.getElementById("pfp");
    let images = ["Assets/ice_castles.jpg", "Assets/factorio.png"];
    image.style.transform = 'rotateY(90deg)';
    setTimeout(() => {
        i = (i + 1) % images.length;
        image.src = images[i];
        image.style.transform = 'rotateY(0deg)'; 
    }, 300);
}


window.onload = () => {
    setInterval(image_swap, 5000);
    setInterval(update_header_text, 20_000);
}
