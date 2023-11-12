document.addEventListener("DOMContentLoaded", function () {
  const sandiInput = document.getElementById("SANDI");
  const togglePasswordBtn = document.getElementById("togglePassword");

  // Menambahkan event listener untuk tombol "Lihat Sandi"
  togglePasswordBtn.addEventListener("click", function () {
    // Mengganti tipe input antara password dan text
    sandiInput.type = sandiInput.type === "password" ? "text" : "password";
  });

  const scriptURL = "<linkUrlGoogleAppScrit>";
  const form = document.forms["submit-to-google-sheet"];

  const jenisAkunDropdown = document.getElementById("JENIS AKUN");
  const planDropdown = document.getElementById("PLAN");

  jenisAkunDropdown.addEventListener("change", function () {
    adjustPlanOptions();
  });

  function adjustPlanOptions() {
    const selectedJenisAkun = jenisAkunDropdown.value;
    const planOptions = planDropdown.options;

    for (let i = 0; i < planOptions.length; i++) {
      const planOption = planOptions[i];
      const planType = planOption.getAttribute("data-type");

      if (planType === selectedJenisAkun) {
        planOption.style.display = "block";
      } else {
        planOption.style.display = "none";
      }
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const namaPembeliInput = form.querySelector("#PEMBELI");
    let namaPembeli = namaPembeliInput.value;
    namaPembeli = namaPembeli.toUpperCase();
    namaPembeliInput.value = namaPembeli;

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        if (response.ok) {
          $("#result").html(
            `<div class="alert alert-success">${response.result}</div>`
          );
        } else {
          $("#result").html(
            `<div class="alert alert-danger">Terjadi kesalahan: ${response.statusText}</div>`
          );
        }
      })
      .catch((error) =>
        $("#result").html(
          `<div class="alert alert-danger">Terjadi kesalahan: ${error.message}</div>`
        )
      );
  });

  adjustPlanOptions();
});

/* 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["submit-to-google-sheet"];
  const emailInput = form.querySelector("#EMAIL");

  // Menambahkan event listener untuk event input
  emailInput.addEventListener("input", function () {
    // Mengambil nilai input email
    const emailValue = emailInput.value;

    // Menyisipkan "emailnya :" di depan nilai input jika belum ada
    if (!emailValue.startsWith("emailnya :")) {
      emailInput.value = "emailnya : " + emailValue;
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Mengganti nilai input email pada FormData sebelum mengirimkan formulir
    const formData = new FormData(form);
    formData.set("EMAIL", emailInput.value);

    // Melanjutkan pengiriman data ke Google Sheets
    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        if (response.ok) {
          $("#result").html(
            `<div class="alert alert-success">${response.result}</div>`
          );
        } else {
          $("#result").html(
            `<div class="alert alert-danger">Terjadi kesalahan: ${response.statusText}</div>`
          );
        }
      })
      .catch((error) =>
        $("#result").html(
          `<div class="alert alert-danger">Terjadi kesalahan: ${error.message}</div>`
        )
      );
  });
});



*/
