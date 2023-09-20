function load() {
    alert("Website is currently a WIP, please excuse the emptiness. Thanks!")
}

function textChange(...args) {
    const change = prompt("");
    args.text = change;
}


function swapText() {
    const element = document.getElementById("typeText")
    element.innerHTML = "A Student";
    console.log("working");
    setTimeout(() => {element.innerHTML = "Chase Quigley"}, 3000);
}
