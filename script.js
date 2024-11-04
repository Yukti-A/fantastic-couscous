const temperatureInput = document.getElementById('temperature');
const unitFromSelect = document.getElementById('unit-from');
const unitToSelect = document.getElementById('unit-to');
const convertBtn = document.getElementById('convert-btn');
const resultParagraph = document.getElementById('result');

convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const temperature = parseFloat(temperatureInput.value);
    const unitFrom = unitFromSelect.value;
    const unitTo = unitToSelect.value;

    let result;

    if (unitFrom === 'celsius' && unitTo === 'fahrenheit') {
        result = temperature * 9/5 + 32;
    } else if (unitFrom === 'celsius' && unitTo === 'kelvin') {
        result = temperature + 273.15;
    } else if (unitFrom === 'fahrenheit' && unitTo === 'celsius') {
        result = (temperature - 32) * 5/9;
    } else if (unitFrom === 'fahrenheit' && unitTo === 'kelvin') {
        result = (temperature - 32) * 5/9 + 273.15;
    } else if (unitFrom === 'kelvin' && unitTo === 'celsius') {
        result = temperature - 273.15;
    } else if (unitFrom === 'kelvin' && unitTo === 'fahrenheit') {
        result = (temperature - 273.15) * 9/5 + 32;
    }

    resultParagraph.textContent = `${temperature} ${unitFrom} is equal to ${result.toFixed(2)} ${unitTo}`;
});
