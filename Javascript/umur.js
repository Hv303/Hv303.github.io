//    hasil
   function checkResult() {
            const inputInput = document.getElementById("input");
            const input = inputInput.value;

            const now = new Date().getFullYear();   // bernilai tahun saat ini
            const kalkullator = now - input

            const thn = " tahun"
            const result = document.getElementById("result")
            result.innerHTML = "Usia Anda Saat Ini Adalah " + kalkullator + thn
        }
        // end

// btn kembali
document.addEventListener('DOMContentLoaded', function() {
    const btnKembali = document.getElementById('btn-1');
    
    btnKembali.addEventListener('click', function() {
        window.location.href = '../page/random.html';
    });
});
// end
