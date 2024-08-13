function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}

function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const conversionType = document.getElementById('conversionType').value;
    const resultDiv = document.getElementById('result');

    let result;
    if (tempInput === '') {
        result = 'Please enter a temperature value.';
    } else {
        const temp = parseFloat(tempInput);
        if (isNaN(temp)) {
            result = 'Please enter a valid numeric value.';
        } else {
            switch (conversionType) {
                case 'cToF':
                    result = `${temp}°C is equal to ${celsiusToFahrenheit(temp).toFixed(2)}°F`;
                    break;
                case 'fToC':
                    result = `${temp}°F is equal to ${fahrenheitToCelsius(temp).toFixed(2)}°C`;
                    break;
                case 'cToK':
                    result = `${temp}°C is equal to ${celsiusToKelvin(temp).toFixed(2)} K`;
                    break;
                case 'kToC':
                    result = `${temp} K is equal to ${kelvinToCelsius(temp).toFixed(2)}°C`;
                    break;
                case 'fToK':
                    result = `${temp}°F is equal to ${fahrenheitToKelvin(temp).toFixed(2)} K`;
                    break;
                case 'kToF':
                    result = `${temp} K is equal to ${kelvinToFahrenheit(temp).toFixed(2)}°F`;
                    break;
                default:
                    result = 'Please select a valid conversion type.';
            }
        }
    }

    resultDiv.textContent = result;
}
