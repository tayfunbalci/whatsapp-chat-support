(function () {

    const btn = document.querySelector('.wa__btn_popup');
    btn.addEventListener('click', function () {
        if (btn.classList.contains("wa__active")) {
            btn.classList.remove("wa__active");
            $('.wa__popup').fadeOut("slow");
            window.zoom = 1;
            document.body.style.zoom = 1;
            var scale = 'scale(1)';
            document.body.style.webkitTransform = scale;
            document.body.style.msTransform = scale;
            document.body.style.transform = scale;
        } else {
            btn.classList.add("wa__active");
            $('.wa__popup').fadeIn("slow");
        }
    })

    const phoneNumber = "908503056191"; // Telefon numarası
    let message = ""; // Mesaj
    let whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    const messageInput = document.getElementById("messageInput");
    messageInput.addEventListener("input", function () {
        message = messageInput.value; // Input alanının değerini `message` değişkenine atayın
        whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    });


    const whatsappLink = document.querySelector(".wa__popup_send_btn");
    whatsappLink.addEventListener("click", function (event) {
        event.preventDefault(); // Varsayılan bağlantı davranışını önleyin
        messageInput.value = "";
        btn.classList.remove("wa__active");
        $('.wa__popup').fadeOut("slow");
        window.open(whatsappUrl, "_blank"); // WhatsApp bağlantısını yeni bir sekmede açın
    });

})();