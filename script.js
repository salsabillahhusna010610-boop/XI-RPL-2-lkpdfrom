const form = document.getElementById("formPendaftaran");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const password = document.getElementById("password");
const konfirmasi = document.getElementById("konfirmasi");
const ekskul = document.getElementById("ekskul");
const pesan = document.getElementById("pesan");


// ================= VALIDASI =================


// Fungsi untuk memberi tanda input
function beriTanda(input, benar) {

    if (benar) {

        input.classList.remove("invalid");
        input.classList.add("valid");

    } else {

        input.classList.remove("valid");
        input.classList.add("invalid");

    }
}


// Validasi nama
function cekNama() {

    const benar = nama.value.trim().length >= 3;

    beriTanda(nama, benar);

    return benar;
}


// Validasi email
function cekEmail() {

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const benar = polaEmail.test(email.value);

    beriTanda(email, benar);

    return benar;
}


// Validasi password
function cekPassword() {

    const benar = password.value.length >= 8;

    beriTanda(password, benar);

    return benar;
}


// Validasi konfirmasi password
function cekKonfirmasi() {

    const benar =
        konfirmasi.value !== "" &&
        konfirmasi.value === password.value;

    beriTanda(konfirmasi, benar);

    return benar;
}


// Validasi ekstrakurikuler
function cekEkskul() {

    const benar = ekskul.value !== "";

    beriTanda(ekskul, benar);

    return benar;
}


// ================= SUBMIT FORM =================

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const namaBenar = cekNama();
    const emailBenar = cekEmail();
    const passwordBenar = cekPassword();
    const konfirmasiBenar = cekKonfirmasi();
    const ekskulBenar = cekEkskul();


    if (
        namaBenar &&
        emailBenar &&
        passwordBenar &&
        konfirmasiBenar &&
        ekskulBenar
    ) {

        // Pesan berhasil
        pesan.textContent =
            "✓ Pendaftaran Berhasil! Data kamu sudah berhasil dikirim.";

        pesan.className = "sukses";

    } else {

        // Pesan error
        pesan.textContent =
            "✕ Mohon periksa kembali data yang diisi.";

        pesan.className = "error";
    }

});


// ================= VALIDASI SAAT MENGETIK =================

nama.addEventListener("input", cekNama);

email.addEventListener("input", cekEmail);

password.addEventListener("input", cekPassword);

konfirmasi.addEventListener("input", cekKonfirmasi);

ekskul.addEventListener("change", cekEkskul);



// ========================================================
// ================= CHATBOT ==============================
// ========================================================

const chatButton = document.getElementById("chatButton");

const chatbot = document.getElementById("chatbot");

const closeChat = document.getElementById("closeChat");

const chatInput = document.getElementById("chatInput");

const sendChat = document.getElementById("sendChat");

const chatMessages = document.getElementById("chatMessages");


// ================= BUKA CHATBOT =================

chatButton.addEventListener("click", function() {

    chatbot.style.display = "block";

    chatInput.focus();

});


// ================= TUTUP CHATBOT =================

closeChat.addEventListener("click", function() {

    chatbot.style.display = "none";

});


// ================= TAMBAH PESAN =================

function tambahPesan(text, tipe) {

    const div = document.createElement("div");

    div.textContent = text;

    div.classList.add(tipe);

    chatMessages.appendChild(div);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// ================= JAWABAN CHATBOT =================

function jawabanBot(pertanyaan) {

    pertanyaan = pertanyaan.toLowerCase().trim();


    // ----------------------------------------
    // SAPAAN
    // ----------------------------------------

    if (
        pertanyaan.includes("halo") ||
        pertanyaan.includes("hai") ||
        pertanyaan.includes("hello") ||
        pertanyaan.includes("hi")
    ) {

        return "Halo! 👋 Ada yang bisa saya bantu tentang pendaftaran ekstrakurikuler?";

    }


    // ----------------------------------------
    // EKSTRAKURIKULER
    // ----------------------------------------

    if (
        pertanyaan.includes("eskul") ||
        pertanyaan.includes("ekskul") ||
        pertanyaan.includes("ekstrakurikuler") ||
        pertanyaan.includes("ekstrakulikuler")
    ) {

        return "Ekstrakurikuler yang tersedia yaitu Pramuka, PMR, Paskibra, Pencak Silat, Drumband, Jurnalistik, Futsal, Voly, Rohis, Tari, dan Padus.";

    }


    // ----------------------------------------
    // VOLY
    // ----------------------------------------

    if (
        pertanyaan.includes("voly") ||
        pertanyaan.includes("voli")
    ) {

        return "Ya, ada ekstrakurikuler Voly. Kamu bisa memilih Voly pada bagian Pilihan Ekstrakurikuler.";

    }


    // ----------------------------------------
    // FUTSAL
    // ----------------------------------------

    if (
        pertanyaan.includes("futsal")
    ) {

        return "Ya, ada ekstrakurikuler Futsal. Kamu bisa memilih Futsal pada bagian Pilihan Ekstrakurikuler.";

    }


    // ----------------------------------------
    // PRAMUKA
    // ----------------------------------------

    if (
        pertanyaan.includes("pramuka")
    ) {

        return "Ya, ada ekstrakurikuler Pramuka. Kamu bisa memilih Pramuka pada bagian Pilihan Ekstrakurikuler.";

    }


    // ----------------------------------------
    // CARA PENDAFTARAN
    // ----------------------------------------

    if (
        pertanyaan.includes("cara daftar") ||
        pertanyaan.includes("bagaimana daftar") ||
        pertanyaan.includes("cara mendaftar") ||
        pertanyaan.includes("bagaimana mendaftar") ||
        pertanyaan.includes("cara pendaftaran") ||
        pertanyaan.includes("pendaftaran")
    ) {

        return "Cara mendaftar yaitu isi Nama Lengkap, Email, Password, Konfirmasi Password, lalu pilih Ekstrakurikuler. Setelah semua benar, tekan tombol Daftar.";

    }


    // ----------------------------------------
    // PASSWORD
    // ----------------------------------------

    if (
        pertanyaan.includes("password") ||
        pertanyaan.includes("kata sandi")
    ) {

        return "Password harus memiliki minimal 8 karakter. Konfirmasi password juga harus sama dengan password.";

    }


    // ----------------------------------------
    // EMAIL
    // ----------------------------------------

    if (
        pertanyaan.includes("email") ||
        pertanyaan.includes("gmail")
    ) {

        return "Silakan masukkan email dengan format yang benar, contohnya nama@gmail.com.";

    }


    // ----------------------------------------
    // NAMA
    // ----------------------------------------

    if (
        pertanyaan.includes("nama")
    ) {

        return "Masukkan nama lengkap kamu pada kolom Nama Lengkap. Nama harus terdiri dari minimal 3 karakter.";

    }


    // ----------------------------------------
    // TERIMA KASIH
    // ----------------------------------------

    if (
        pertanyaan.includes("terima kasih") ||
        pertanyaan.includes("makasih") ||
        pertanyaan.includes("thanks")
    ) {

        return "Sama-sama! 😊 Semoga pendaftarannya berhasil.";

    }


    // ----------------------------------------
    // JAWABAN JIKA TIDAK DIKENALI
    // ----------------------------------------

    return "Maaf, saya belum memahami pertanyaan tersebut. Kamu bisa bertanya tentang cara pendaftaran, ekstrakurikuler, email, password, atau nama.";

}


// ================= KIRIM CHAT =================

function kirimChat() {

    const pertanyaan = chatInput.value.trim();


    // Jika input kosong
    if (pertanyaan === "") {

        return;

    }


    // Tampilkan pesan pengguna
    tambahPesan(
        pertanyaan,
        "user-message"
    );


    // Kosongkan input
    chatInput.value = "";


    // Cari jawaban
    const jawaban = jawabanBot(pertanyaan);


    // Tampilkan jawaban chatbot
    setTimeout(function() {

        tambahPesan(
            jawaban,
            "bot-message"
        );

    }, 400);

}


// ================= TOMBOL KIRIM =================

sendChat.addEventListener(
    "click",
    kirimChat
);


// ================= ENTER UNTUK KIRIM =================

chatInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            kirimChat();

        }

    }
);