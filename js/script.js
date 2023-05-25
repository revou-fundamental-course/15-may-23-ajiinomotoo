var inputError = document.getElementById("input-error");
var tampil = document.getElementById("hasil");

function hitung() {
  var sisi = parseInt(document.getElementById("sisi").value);

  // Untuk menghitung Luas
  var luas = sisi * sisi;

  // Untuk menghitung keliling
  var keliling = 4 * sisi;

  // Menampilkan rumus luas
  document.getElementById("rumus-luas").innerText = "L = S x S ";

  // Menampilkan rumus keliling
  document.getElementById("rumus-keliling").innerText = "K = 4 x S ";

  document.getElementById("perhitungan-luas").innerText =
    "L = " + sisi + " x " + sisi;
  document.getElementById("perhitungan-keliling").innerText =
    "K = " + 4 + " x " + sisi;

  // Menampilkan hasil luas
  document.getElementById("output-luas").innerText = "L = " + luas;

  // Menampilkan hasil keliling
  document.getElementById("output-keliling").innerText = "K = " + keliling;

  // console.log(luas);
  // console.log(keliling);
}

// Fungsi untuk me-reset
function reset() {
  var tampil = document.getElementById("hasil");

  document.getElementById("sisi").value = "";

  if (tampil.style.display === "flex") {
    tampil.style.display = "none";
  }
}

// Validaso Input
function validateSisi() {
  var input = document.getElementById("sisi").value;

  if (input.length == 0) {
    inputError.innerHTML = "Tidak boleh kosong !!";
    return false;
  }
  if (!input.match(/^[0-9]+$/)) {
    inputError.innerHTML = "Masukkan Angka !!";
    return false;
  }
  return true;
}

// Validasi Submit
function validateForm() {
  if (!validateSisi()) {
    if (tampil.style.display === "flex") {
      tampil.style.display = "none";
    }
    return false;
  }
  if (validateSisi()) {
    if (tampil.style.display === "none") {
      tampil.style.display = "flex";
    }
  }
}
