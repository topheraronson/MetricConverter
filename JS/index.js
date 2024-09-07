function convertToFeet(toFeet) {
    return toFeet * 3.280839895
}

function converToMeters(toMeters) {
    return toMeters * 0.3048
}

function convertToGallons(toGallons) {
    return toGallons * 0.2641720524
}

function convertToLiters(toLiters) {
    return toLiters * 3.78541
}

function convertToPounds(toPounds) {
    return toPounds * 2.20462
}

function convertToKilos(toKilos) {
    return toKilos * 0.453592
}

function render(number, feet, meters, gallons, liters, pounds, kilos) {
    document.querySelectorAll(".nonvonverted-text").forEach((e) => {e.textContent = number})

    document.getElementById("converted-feet").textContent = feet.toFixed(3)
    document.getElementById("converted-meters").textContent = meters.toFixed(3)

    document.getElementById("converted-gallon").textContent = gallons.toFixed(3)
    document.getElementById("converted-liters").textContent = liters.toFixed(3)

    document.getElementById("converted-pounds").textContent = pounds.toFixed(3)
    document.getElementById("converted-kilos").textContent = kilos.toFixed(3)
}

function convert() {
    const input = document.getElementById("converter-box");
    const numberToConvert = input === null ? 0 : Number(input.value);

    const feet = convertToFeet(numberToConvert);
    const meters = converToMeters(numberToConvert);

    const gallons = convertToGallons(numberToConvert);
    const liters = convertToLiters(numberToConvert);

    const pounds = convertToPounds(numberToConvert);
    const kilos = convertToKilos(numberToConvert);

    render(numberToConvert, feet, meters, gallons, liters, pounds, kilos);
}

const convertBtn = document.getElementById("converter-btn");
convertBtn.addEventListener("click", convert);