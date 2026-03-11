// 1. Inisialisasi saat Document Ready
$(document).ready(function() {
    AOS.init({ duration: 1000, once: true });

    // Cek Nama Tamu di URL
    const urlParams = new URLSearchParams(window.location.search);
    const to = urlParams.get('to');
    if (to) {
        $('#guest-name').text(to);
    }

    // Jalankan Countdown
    const hDay = '2026/03/26 08:30:00';
    $('#countdown-box').countdown(hDay, function(event) {
        $(this).html(event.strftime(
            '<div class="unit text-white"><span>%D</span><br><small>Hari</small></div>' +
            '<div class="unit text-white"><span>%H</span><br><small>Jam</small></div>' +
            '<div class="unit text-white"><span>%M</span><br><small>Menit</small></div>' +
            '<div class="unit text-white"><span>%S</span><br><small>Detik</small></div>'
        ));
    });
});

// 2. Fungsi Buka Undangan
function openInvitation() {
    // Geser overlay ke atas
    $('#overlay').css('transform', 'translateY(-100%)');
    
    // Aktifkan scroll pada body
    $('body').css('overflow', 'auto');
    
    // Tampilkan tombol musik
    $('#music-toggle').fadeIn();

    // Play Music
    const audio = document.getElementById('weddingMusic');
    audio.play().catch(e => console.log("User belum interaksi"));

    // Hapus dari DOM setelah animasi selesai agar ringan
    setTimeout(() => { $('#overlay').hide(); }, 1000);
}

// 3. Kontrol Musik
function toggleMusic() {
    const audio = document.getElementById('weddingMusic');
    const icon = $('#music-icon');
    
    if (audio.paused) {
        audio.play();
        icon.attr('class', 'bi bi-music-note-beamed');
    } else {
        audio.pause();
        icon.attr('class', 'bi bi-music-note');
    }
}

// 4. RSVP WhatsApp
function sendRSVP() {
    const nama = $('#guest-name').text();
    const pesan = `Halo Gede & Kumala, saya ${nama} ingin mengonfirmasi kehadiran di acara Pawiwahan kalian.`;
    window.open(`https://wa.me/628123456789?text=${encodeURIComponent(pesan)}`, '_blank');
}