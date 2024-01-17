
function provideDescription(Int) {
    switch (Int) {
        case 1:
        document.getElementById("photo1").src = "Travel_Photos/Green.HEIC";
                //alert("Andorra la Vella, Andorra");
            break;
        case 2:
            document.getElementById("photo2").src = "Travel_Photos/Green.HEIC";
            //alert("Horseshoe Beach, Bermuda"); 
            break;
        case 3:
            document.getElementById("photo3").src = "Travel_Photos/Green.HEIC";
            //alert("King's Wharf, Bermuda");
            break;
        case 4: 
            document.getElementById("photo4").src = "Travel_Photos/Green.HEIC";
            //alert("Gunstock Mountain Resort, NH"); 
            break;
        case 5:
            document.getElementById("photo5").src = "Travel_Photos/Green.HEIC";
            // alert("I-95 South, MA");
            break;
        case 6: 
            document.getElementById("photo6").src = "Travel_Photos/Green.HEIC";
            // alert("Kangamangus Trail, NH"); 
            break;
        case 7:
            document.getElementById("photo7").src = "Travel_Photos/Green.HEIC";
            // alert("New York City, NY");
            break;
        case 8: 
            document.getElementById("photo8").src = "Travel_Photos/Green.HEIC";
            // alert("The Ocean, Aruba"); 
            break;
        case 9:
            document.getElementById("photo9").src = "Travel_Photos/Green.HEIC";
            // alert("Attitash Mountain Resort, NH");
            break;
        case 10: 
            document.getElementById("photo10").src = "Travel_Photos/Green.HEIC";
            // alert("The Tundra, Iceland"); 
            break;
        case 11:
            document.getElementById("photo11").src = "Travel_Photos/Green.HEIC";
            // alert("Vik Beach, Iceland");
            break;
        case 12: 
            document.getElementById("photo12").src = "Travel_Photos/Green.HEIC";
            // alert("TD Garden, MA"); 
            break;
        case 13:
            document.getElementById("photo13").src = "Travel_Photos/Ball.HEIC";
            // alert("Big Chair Aruba, Aruba");
            break;
        case 14: 
             document.getElementById("photo14").src = "Travel_Photos/Ball.HEIC";
            // alert("Reykjavik, Iceland"); 
            break;
        case 15:
            document.getElementById("photo15").src = "Travel_Photos/Ball.HEIC";
            // alert("Northern Lights, Iceland");
            break;
        case 16: 
            document.getElementById("photo16").src = "Travel_Photos/Ball.HEIC";
            // alert("Portsmouth, NH"); 
            break;
        case 17:
            document.getElementById("photo17").src = "Travel_Photos/Ball.HEIC";
            // alert("Somewhere, Pennsylvania")
        default:
            break;
    }
}

function reset(Int) {
    switch (Int) {
        case 1:
            document.getElementById("photo1").src = "Travel_Photos/Andorra.JPG";
            break;
        case 2:
            document.getElementById("photo2").src = "Travel_Photos/Bermuda.HEIC";
            break;
        case 3:
            document.getElementById("photo3").src = "Travel_Photos/BermudaBay.HEIC";
            break;
        case 4:
            document.getElementById("photo4").src = "Travel_Photos/Gunstock.HEIC";
            break;
        case 5:
            document.getElementById("photo5").src = "Travel_Photos/Highway.HEIC";
            break;
        case 6:
            document.getElementById("photo6").src = "Travel_Photos/Kanga.HEIC";
            break;
        case 7:
            document.getElementById("photo7").src = "Travel_Photos/NY.HEIC";
            break;
        case 8:
            document.getElementById("photo8").src = "Travel_Photos/Pirate.HEIC";
            break;
        case 9:
                document.getElementById("photo9").src = "Travel_Photos/Skiing.HEIC";
                break;
        case 10:
            document.getElementById("photo10").src = "Travel_Photos/Subaru.HEIC";
            break;
        case 11:
            document.getElementById("photo11").src = "Travel_Photos/VikBeach.HEIC";
            break;
        case 12:
            document.getElementById("photo12").src = "Travel_Photos/Bruins.HEIC";
            break;
        case 13:
            document.getElementById("photo13").src = "Travel_Photos/BigChair.HEIC";
            break;
        case 14:
            document.getElementById("photo14").src = "Travel_Photos/Reyk.HEIC";
            break;
        case 15:
            document.getElementById("photo15").src = "Travel_Photos/NorthLights.HEIC";
            break;
        case 16:
            document.getElementById("photo16").src = "Travel_Photos/Portsmouth.HEIC";
            break;
        case 17:
            document.getElementById("photo17").src = "Travel_Photos/Scout.HEIC";
            break;
}
}