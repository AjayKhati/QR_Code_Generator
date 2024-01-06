let btn = document.querySelector('#generate');
let qrcode = document.querySelector('.qrcode');
let saveButton = document.querySelector('#save-image');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let text = document.querySelector('#text').value;

    if (text == '') {
        alert('Enter Text or URL into Textbox!');
    } else {
        let qr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${text}`;

        qrcode.classList.add('active');
        qrcode.src = qr;

        // Show Save Image button after 2 seconds
        setTimeout(() => {
            saveButton.style.display = 'block';
        }, 2000);

        // Show Save Image button
        saveButton.style.display = 'block';
    }
});

saveButton.addEventListener('click', () => {
    // Get the QR code image
    let qrImage = document.querySelector('#generated-qrcode');

    // Create a temporary link element
    let link = document.createElement('a');
    link.href = qrImage.src;
    link.download = 'qrcode.png';

    // Trigger a click on the link to start the download
    link.click();
});
