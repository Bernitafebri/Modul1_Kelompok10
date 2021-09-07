const makan=["cinovac", "gsastra", "moderni", "titan"];
const asynca = async () => {
    await myFunc();
    await cetak();
}
const cetak=()=>{
    console.log("Terimakasih sudah menggunakan layanan kami");
}
const myFunc= () => {
    var valueNama = document.getElementById("nama").value;
    var valueVaksin = document.getElementById("vaksin").value;
    (makan.indexOf(valueVaksin) > -1)?console.log(valueNama+" pesan vaksin "+valueVaksin):console.log(valueNama+" tidak jadi vaksin");
  }