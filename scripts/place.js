document.addEventListener("DOMContentLoaded", function () {
    const temperature = 5;
    const windSpeed = 10;

    const windChillElement = document.getElementById("windChill");
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
    } else {
        windChillElement.textContent = "N/A";
    }
});

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}