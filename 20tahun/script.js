// Pindah halaman
function goToPage(page) {
    const pages = document.querySelectorAll('.gallery-page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`).classList.add('active');
}

// Interaksi foto masa kecil
function showNextPhoto(element) {
    const images = element.querySelectorAll('img');
    images.forEach(img => img.classList.toggle('hidden'));
    function startSurprise() {
    document.getElementById("opening-page").classList.remove("active");
    document.getElementById("page-1").classList.add("active");}
}
//tambahan
// Fungsi untuk animasi Love
function showExplosion() {
    const container = document.getElementById("hearts-container");
    container.classList.remove("hidden");

    // Buat animasi love
    for (let i = 0; i < 50; i++) {  // Tambahkan lebih banyak hati
        const heart = document.createElement("div");
        heart.classList.add("heart");
        // Sebar hati di seluruh layar
        heart.style.left = Math.random() * 100 + "vw";  // Horizontal acak
        heart.style.top = Math.random() * 100 + "vh";   // Vertikal acak
        heart.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(heart);

        // Hapus heart setelah animasi selesai
        setTimeout(() => heart.remove(), 3000);
    }

    // Pindah ke galeri setelah animasi selesai
    setTimeout(() => {
        document.getElementById("birthday-page").classList.remove("active");
        document.getElementById("page-1").classList.add("active");
    }, 3000); // Waktu animasi love
}




