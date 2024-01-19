
function provideDescription(Int) {
    switch (Int) {
        
        // TO DO:
        // Add descriptions to each individual location
        // Include: Dates, People, Rating / 10 
        // Increase size of container (if needed)

        case 1:
            // document.getElementById("photo1").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "Andorra la Vella!";
            document.getElementById("description").innerHTML = "Here I went to Andorra la Vella";
            break;
        case 2:
            // document.getElementById("photo2").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "Horseshoe Beach, Bermuda!";
            break;
        case 3:
            // document.getElementById("photo3").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "King's Wharf, Bermuda!";
            break;
        case 4: 
            // document.getElementById("photo4").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "Gunstock Mountain Resort, New Hampshire!";
            break;
        case 5:
            // document.getElementById("photo5").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "I-95 South, Massachusetts!";
            break;
        case 6: 
            // document.getElementById("photo6").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "Kangamangus Hiking Trail, New Hampshire!";
            break;
        case 7:
            // document.getElementById("photo7").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "New York City, New York!";
            break;
        case 8: 
            // document.getElementById("photo8").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "The Ocean, Aruba!";
            break;
        case 9:
            // document.getElementById("photo9").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "Attitash Mountain Resort, New Hampshire!";
            break;
        case 10: 
            // document.getElementById("photo10").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "The Tundra, Iceland!";
            break;
        case 11:
            // document.getElementById("photo11").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "Vik Beach, Iceland!";
            break;
        case 12: 
            // document.getElementById("photo12").src = "Travel_Photos/Green.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "TD Garden, Massachusetts!";
            break;
        case 13:
            // document.getElementById("photo13").src = "Travel_Photos/Ball.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "Big Chair Aruba, Aruba!";
            break;
        case 14: 
            //  document.getElementById("photo14").src = "Travel_Photos/Ball.HEIC";
             document.getElementById("textContainer").style.display = "block";
             document.getElementById("Location").innerHTML = "Reykjavik, Iceland!";
            break;
        case 15:
            // document.getElementById("photo15").src = "Travel_Photos/Ball.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "Northern Lights, Iceland!";
            break;
        case 16: 
            // document.getElementById("photo16").src = "Travel_Photos/Ball.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "Portsmouth, New Hampshire!";
            break;
        case 17:
            // document.getElementById("photo17").src = "Travel_Photos/Ball.HEIC";
            document.getElementById("textContainer").style.display = "block";
            document.getElementById("Location").innerHTML = "The SOOOB, Pennsylvania";
        default:
            break;
    }
}

function reset(Int) {
    switch (Int) {
        case 1:
            // document.getElementById("photo1").src = "Travel_Photos/Andorra.JPG";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 2:
            // document.getElementById("photo2").src = "Travel_Photos/Bermuda.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 3:
            // document.getElementById("photo3").src = "Travel_Photos/BermudaBay.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 4:
            // document.getElementById("photo4").src = "Travel_Photos/Gunstock.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 5:
            // document.getElementById("photo5").src = "Travel_Photos/Highway.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 6:
            // document.getElementById("photo6").src = "Travel_Photos/Kanga.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 7:
            // document.getElementById("photo7").src = "Travel_Photos/NY.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 8:
            // document.getElementById("photo8").src = "Travel_Photos/Pirate.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 9:
                // document.getElementById("photo9").src = "Travel_Photos/Skiing.HEIC";
                document.getElementById("textContainer").style.display = "none";
                break;
        case 10:
            // document.getElementById("photo10").src = "Travel_Photos/Subaru.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 11:
            // document.getElementById("photo11").src = "Travel_Photos/VikBeach.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 12:
            // document.getElementById("photo12").src = "Travel_Photos/Bruins.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 13:
            // document.getElementById("photo13").src = "Travel_Photos/BigChair.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 14:
            // document.getElementById("photo14").src = "Travel_Photos/Reyk.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 15:
            // document.getElementById("photo15").src = "Travel_Photos/NorthLights.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 16:
            // document.getElementById("photo16").src = "Travel_Photos/Portsmouth.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
        case 17:
            // document.getElementById("photo17").src = "Travel_Photos/Scout.HEIC";
            document.getElementById("textContainer").style.display = "none";
            break;
}
}