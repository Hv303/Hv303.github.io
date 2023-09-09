document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const webhookUrl = 'https://discord.com/api/webhooks/1140571639705247765/RnX68R94NWIszm1GjhJxKZcdxRaFwGTuxKEu4Jzfghe9Y4dlrNHjLEpLot7i6mpeL-hu'; // Ganti dengan URL webhook yang sesuai

    // delay kirim pesan
    let canSend = true; // Status flag untuk mengontrol apakah pesan dapat dikirim
    const delayTime = 1000; // Waktu penundaan dalam milidetik (misalnya 5000 untuk 5 detik)

    messageForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!canSend) {
            alert('Mohon tunggu sebelum mengirim pesan lagi.');
            return;
        }

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        const dataToSend = {
            "embeds": [
                {
                  "title": "Msg Hv Webs",
                  "description": "Ini ada pesan untuk mu",
                  "color": 4939956,
                  "fields": [
                    {
                      "name": `name: ${name}`,
                      "value": `pesan: ${message}`
                    }
                  ]
                }
              ]
        };

        canSend = false; // Set flag menjadi false untuk mencegah pengiriman berulang

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });
            console.log('Pesan terkirim:', response);
            alert('Pesan berhasil terkirim!');

            // Menunggu selama waktu penundaan sebelum dapat mengirim pesan lagi
            setTimeout(() => {
                canSend = true; // Set flag menjadi true setelah delay selesai
            }, delayTime);
        } catch (error) {
            console.error('Gagal mengirim pesan:', error);
            alert('Pesan gagal terkirim. Silakan coba lagi nanti.');
            canSend = true; // Set flag menjadi true dalam kasus error agar pengiriman tetap dapat dilakukan
        }
    });
});


// max send pesan
document.addEventListener('DOMContentLoaded', () => {
    const messageTextarea = document.getElementById('message');
    const submitButton = document.getElementById('submitButton');

    messageTextarea.addEventListener('input', () => {
      if (messageTextarea.value.length > 1100) {
        messageTextarea.setCustomValidity('Pesan tidak boleh lebih dari 1103 karakter.');
      } else {
        messageTextarea.setCustomValidity('');
      }
    });

    submitButton.addEventListener('click', (event) => {
      if (messageTextarea.value.length > 1103) {
        event.preventDefault();
        alert('Pesan tidak boleh lebih dari 1103 karakter.');
      }
    });
  });
