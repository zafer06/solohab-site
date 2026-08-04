// js file

function hesaplaFiyat() {
    const maliyet = parseFloat(document.getElementById('maliyet').value) || 0;
    const komisyonOrani = parseFloat(document.getElementById('komisyonOrani').value) || 0;
    const kargoUcreti = parseFloat(document.getElementById('kargoUcreti').value) || 0;
    const karOrani = parseFloat(document.getElementById('karOrani').value) || 0;

    // Fiyatlandırma Formülü
    let toplamGider = maliyet + kargoUcreti;
    let karMiktari = toplamGider * (karOrani / 100);
    let araToplam = toplamGider + karMiktari;
    let satisFiyati = araToplam / (1 - (komisyonOrani / 100));

    // Sonucu ekrana yazdır ve alanı göster
    document.getElementById('resSatishFiyati').innerText = satisFiyati.toFixed(2) + ' ₺';
    document.getElementById('sonucAlani').style.display = 'block';
}
