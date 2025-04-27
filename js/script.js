
function showResult(quality, price) {
    document.getElementById('quality').textContent = quality;
    document.getElementById('price').textContent = 'Harga: ' + price;
    const resultCard = document.getElementById('result');
    resultCard.classList.remove('hidden');
    resultCard.classList.add('visible');
}
