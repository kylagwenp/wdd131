// The weather values match the static text displayed in place.html.
const temperature = 8; // °C
const windSpeed = 12; // km/h

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * wind ** 0.16 + 0.3965 * temp * wind ** 0.16;
}

const windChill = temperature <= 10 && windSpeed > 4.8
    ? `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`
    : 'N/A';

document.querySelector('#wind-chill').textContent = windChill;
document.querySelector('#current-year').textContent = new Date().getFullYear();
document.querySelector('#last-modified').textContent = document.lastModified;
