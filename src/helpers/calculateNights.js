'use strict'
// Helper function to calculate nights
function calculateNights(arrivalDate, departureDate) {
    const msPerDay = 1000 * 60 * 60 * 24; // 1 günün milisaniye değeri
    const differenceInMs = departureDate - arrivalDate; // Milisaniye farkı
    const nights = Math.ceil(differenceInMs / msPerDay); // Gece sayısını hesapla
    return nights > 0 ? nights : 0; // Negatif farkı sıfıra çevir
}

module.exports = calculateNights;
