const API = "5b385d5da06a23422c5587a9802957fa";
navigator.geolocation.getCurrentPosition(sucess, failed);

function sucess(pos) {
    let latitude = pos.coords.latitude;
    let longitude = pos.coords.longitude;
    getInfo(latitude, longitude);
}

function failed(err) {
    alert("User did not allow the use of Geolocation, location is now set to Leiria");
    getInfo(39.74362, -8.80705);
}

function getInfo(lat, long) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("country").innerHTML = data.name + " | ";
            document.getElementById("city").innerHTML = data.sys.country
        });
}

function getTime() {
    time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    let secondsHtml = document.querySelector(".seconds");
    let minutesHtml = document.querySelector(".minutes");
    let hoursHtml = document.querySelector(".hours");

    secondsHtml.style.transform = `rotate(${(seconds * 6) + 90}deg)`;
    minutesHtml.style.transform = `rotate(${(minutes * 6) + 90}deg)`;
    hoursHtml.style.transform = `rotate(${(hours * 30) + 90}deg)`;

}

setInterval(getTime, 1000);