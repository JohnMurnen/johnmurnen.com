function darkMode() {
    if(document.getElementById("darkModeButton").innerHTML === "Dark Mode"){
        document.getElementById("darkModeButton").innerHTML = "Light Mode";

        document.querySelector('.header').style.backgroundColor = '#fafaf0';
        document.querySelector('.header').style.color = 'black';

        document.querySelector('body').style.backgroundColor = '#990000';
        document.querySelector('body').style.color = 'white';

        var x = document.querySelector("nav").querySelectorAll("a"); 
        x[0].style.color = "black";
        x[1].style.color = "black"; 
        x[2].style.color = "black"; 
    } else {
        document.getElementById("darkModeButton").innerHTML = "Dark Mode";

        document.querySelector('.header').style.backgroundColor = '#990000';
        document.querySelector('.header').style.color = 'white';

        document.querySelector('body').style.backgroundColor = '#fafaf0';
        document.querySelector('body').style.color = 'black';

        var x = document.querySelector("nav").querySelectorAll("a"); 
        x[0].style.color = "white";
        x[1].style.color = "white"; 
        x[2].style.color = "white"; 
    }
}