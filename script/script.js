document.addEventListener("DOMContentLoaded", function () {
  //=============== LOGIKA SANDI ==================//
  const sandiInput = document.getElementById("SANDI");
  const togglePasswordBtn = document.getElementById("togglePassword");

  // Menambahkan event listener untuk tombol "Lihat Sandi"
  togglePasswordBtn.addEventListener("click", function () {
    // Mengganti tipe input antara password dan text
    sandiInput.type = sandiInput.type === "password" ? "text" : "password";
  });
  //================================================//
  //============= UBAH DATA DISINI ============//
  const scriptURL = "isi_url_appscript_kamu";
  const form = document.forms["submit-to-google-sheet"];
  //===========================================//
  const jenisAkunDropdown = document.getElementById("JENIS_AKUN"); // ubah sesuai keinginan anda
  const planDropdown = document.getElementById("PLAN"); // ubah juga kalau ngerti

  jenisAkunDropdown.addEventListener("change", function () {
    adjustPlanOptions();
  });
  planDropdown.addEventListener("click", function () {
    const selectedJenisAkun = jenisAkunDropdown.value;
    if (!selectedJenisAkun) {
      alert("Pilih jenis akun terlebih dahulu!");
    }
  });
  function adjustPlanOptions() {
    const selectedJenisAkun = jenisAkunDropdown.value;
    const planDropdownOptions = planDropdown.options;

    // Hapus semua opsi pada dropdown, jadi sehingga jadi tidak ada opsinya
    for (let i = planDropdownOptions.length - 1; i >= 0; i--) {
      planDropdownOptions[i].remove();
    }

    // aww
    if (selectedJenisAkun === "") {
      addOption(planDropdown, "", "Pilih PLAN");
    }

    // ganti di sini aja
    switch (selectedJenisAkun) {
      case "SPOTIFY":
        addOption(planDropdown, "1 BULAN", "1 BULAN");
        addOption(planDropdown, "2 BULAN", "2 BULAN");
        addOption(planDropdown, "3 BULAN", "3 BULAN");
        break;
      case "YOUTUBE PREMIUM":
        addOption(planDropdown, "1 BULAN INDPLAN", "1 BULAN INDPLAN");
        addOption(planDropdown, "4 BULAN INDPLAN", "4 BULAN INDPLAN");
        addOption(planDropdown, "1 BULAN FAMHEAD", "1 BULAN FAMHEAD");
        break;
      case "CANVA PRO":
        addOption(planDropdown, "TEAM 1 BULAN", "TEAM 1 BULAN");
        addOption(planDropdown, "ADMIN 1 BULAN", "ADMIN 1 BULAN");
        break;
      case "VIDIO PREMIER PLATINUM":
        addOption(planDropdown, "1 TAHUN NOGAR", "1 TAHUN NOGAR");
        break;
      case "ZOOM PRO":
        addOption(planDropdown, "14 DAY", "14 DAY");
        addOption(planDropdown, "30 DAY", "30 DAY");
        break;
      case "APPLE MUSIC":
        addOption(planDropdown, "1 BULAN INDPLAN", "1 BULAN INDPLAN");
        addOption(planDropdown, "1 BULAN FAMHEAD", "1 BULAN FAMHEAD");
        break;
      default:
        break;
    }
  }

  function addOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
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
    window.location.href =
      "https://wa.me/6282172392004?text=*Saya+Sudah+Memesan+Silahkan+Cek+Admin*";
  });

  adjustPlanOptions();
});
