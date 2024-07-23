function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = `foto_manhã.png`
        document.body.style.background =`#e2cd9f`
        //document.body.style.color = `#3368c9`
    } else {
        if (hora >= 12 && hora < 18 ) {
            //tarde
             img.src = `foto_tarde.png`
              document.body.style.background =`#b9846f`
        } else {
            //noite
             img.src = `foto_noite.png`
              document.body.style.background =`#041543`
        }
    }
}
